angular
    .module('app')
    .controller('ngatViewController', ['$scope', 'THINGS', 'VIEWS', 'ThingService', 
                                       'GoogleService', '$routeParams', '$location', '$sce', '$anchorScroll',
      function($scope, THINGS, VIEWS, ThingService, GoogleService, $routeParams, $location, $sce, $anchorScroll) {
          
        $scope.view = {};
        $scope.addview = {};
        $scope.debug = false;
        $scope.googleSearchTypes = {link: 'web', image: 'images', video: 'video'};
        $scope.thing = {};
        $scope.picklists = {};
        $scope.searchTerms = {};
        $scope.searchResults = {};
        $scope.searchOffsets = {};
        $scope.filters = {};
        $scope.defaultImageHeight = 100;
        $scope.defaultVideoHeight = 320;
        $scope.defaultVideoWidth = 480;
        $scope.dataChanged = false;
          
        if (!$routeParams.view) {
            angular.forEach(VIEWS, function(view, key) {
                if (view.default) {
                    $routeParams.view = key;
                }
            });  
        }
        $scope.viewType = 'list';
        if ($routeParams.id) {
            $scope.viewType = 'detail';
        }

        $scope.thingName = $routeParams.view;
        $scope.view = VIEWS[$routeParams.view][$scope.viewType];
        $scope.view.thing = $scope.thingName;
        $scope.view.type = $scope.viewType;
        $scope.view.style = $scope.view.style || 'card';
        $scope.updateMode = $scope.view.updateModeOnly || false;
        $scope.addview = VIEWS[$routeParams.view]['add'];
        $scope.thingDef = THINGS[$scope.thingName];
        $scope.thingId = $routeParams.id;
        $scope.filterField = $routeParams.filter;
        $scope.filterId = $routeParams.filterid;
          
        // get picklists
        angular.forEach($scope.thingDef.fields, function(field, key) {
            if(field.picklist) {
                $scope.picklists[key] = ThingService.all(field.picklist);
            }
        });
          
        if ($scope.filterField) {
            $scope.filters[$scope.filterField] = $scope.filterId;
            $scope.thing[$scope.filterField] = $scope.filterId;
        }
          
        if ($scope.view.type == 'list') {
            $scope.things = ThingService.all($scope.view.thing);
            if ($scope.view.style =='table') {
                $scope.defaultImageHeight = 50;
            }
        }
          
        if ($scope.view.type=='detail') {
            $scope.defaultImageHeight = 200;
            $scope.thing = ThingService.one($scope.view.thing, $scope.thingId);
            $scope.thing.$loaded().then(function() {
                angular.forEach($scope.view.fields, function(field) {
                    // fill in default search terms
                    if(field.defaultSearchTerm) {
                        var exp = '';
                        angular.forEach(field.defaultSearchTerm[0], function(term) {
                            exp += ' ' + $scope.thing[term];
                        });
                        if (field.defaultSearchTerm[1]) {
                            exp += ' ' + field.defaultSearchTerm[1];
                        }
                        $scope.searchTerms[field.name] = exp;
                    }
                    // create empty object for 2 part link fields
                    if($scope.objectField(field.name).type=='link') {
                        $scope.thing[field.name] = $scope.thing[field.name] || {};
                    }
                });
            });
        }
                    
       $scope.picklistItemName = function(no, id) {
            var plist = $scope.picklists[no];
            for(var i=0; i<plist.length; i++) {
                var item = plist[i];
                if (item.$id == id) {
                    return item.name;
                }
            }
       };
          
       $scope.syncThingToFilters = function() {
            angular.forEach($scope.filters, function(value, key) {
                $scope.thing[key] = value;  
            });
       };
          
        $scope.allowNullValue = function (expected, actual) {
            if (actual === null) {
                return true;
            } else {
                // angular's default (non-strict) internal comparator
                var text = ('' + actual).toLowerCase();
                return ('' + expected).toLowerCase().indexOf(text) > -1;
            }
        };
                            
        $scope.asHtml = function(val) {
            return $sce.trustAsHtml(val);
        };
          
        $scope.youTubeEmbed = function(val) {
            return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val.split('?v=')[1]);
        };
          
        $scope.objectField = function(name) {
           return $scope.thingDef.fields[name];  
        };
          
        $scope.toggleAddView = function() {
            $scope.addview.visible = !$scope.addview.visible;
        };
        
        $scope.addThing = function(keepOpen) {
            ThingService.add($scope.view.thing, $scope.thing);
            $scope.thing = {};
            if (!keepOpen) {
                $scope.addview.visible = false;
            }
        };
        
        $scope.removeThing = function(id) {
            if (window.confirm("OK to delete this item?")) {
                ThingService.remove($scope.view.thing, id);
            }
        };
        
        $scope.removeThingFromDetail = function() {
            if (window.confirm("OK to delete this item?")) {
                ThingService.remove($scope.view.thing, $scope.thing.$id);
                $location.path('/NGAT/' + $scope.view.thing);
            }
        };
          
        $scope.updateThing = function(returnToParent) {
            ThingService.update($scope.thing);
            $scope.dataChanged = false;
            $scope.updateMode = $scope.view.updateModeOnly || false;
            if (returnToParent) {
                $location.path('/NGAT/' + $scope.view.thing)
            }
        };
          
        $scope.setUpdateMode = function(val) {
            $scope.updateMode = val;
        };
        
        $scope.getSearchResults = function(fieldName) {
             var gSearchType = $scope.googleSearchTypes[$scope.thingDef.fields[fieldName].type];
             $scope.searchOffsets[fieldName] = $scope.searchOffsets[fieldName] || 0;
             GoogleService.search(gSearchType, $scope.searchTerms[fieldName], $scope.searchOffsets[fieldName]).then(function(data) {
               $scope.searchResults[fieldName] = data.responseData.results;
           });  
        };
         
        $scope.prevSearchResults = function(fieldName) {
            if ($scope.searchOffsets[fieldName] > 0) {
                $scope.searchOffsets[fieldName] -= 4;
                $scope.getSearchResults(fieldName);
            }
        };
          
        $scope.nextSearchResults = function(fieldName) {
            $scope.searchOffsets[fieldName] += 4;
            $scope.getSearchResults(fieldName);
        };
          
        $scope.clearSearchResults = function(fieldName) {
            $scope.searchResults[fieldName] = {};
            $scope.searchOffsets[fieldName] = 0;

        }
          
        $scope.useSearchResult = function(fieldName, resulturl) {
            $scope.thing[fieldName] = resulturl;
            $scope.searchResults[fieldName] = {};
        };

        $scope.useWebSearchResult = function(fieldName, title, url) {
            $scope.thing[fieldName].url = url;
            $scope.thing[fieldName].title = title;
            $scope.searchResults[fieldName] = {};
        };
              
    }]);