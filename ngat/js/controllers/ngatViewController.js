angular
    .module('app')
    .controller('ngatViewController', ['$scope', 'THINGS', 'VIEWS', 'ThingService', 
                                       'GoogleService', '$routeParams', '$location', '$sce', 
      function($scope, THINGS, VIEWS, ThingService, GoogleService, $routeParams, $location, $sce) {
        $scope.debug = false;
        $scope.googleSearchTypes = {link: 'web', image: 'images', video: 'video'};
        $scope.view = VIEWS[$scope.id];
        $scope.thingDef = THINGS[$scope.view.thing];
        $scope.thingId = $routeParams.id;
        $scope.thing = {};
        $scope.picklists = {};
        $scope.searchTerms = {};
        $scope.searchResults = {};
        $scope.searchOffsets = {};
        $scope.filters = {};
        $scope.defaultImageHeight = 100;
        $scope.defaultVideoHeight = 320;
        $scope.defaultVideoWidth = 480;
        $scope.updateMode = false;
          
        // get picklists
        angular.forEach($scope.thingDef.fields, function(field, key) {
            if(field.picklist) {
                $scope.picklists[key] = ThingService.all(field.picklist);
            }
        });
        
        if ($scope.view.type == 'list') {
            $scope.things = ThingService.all($scope.view.thing);
        }
          
        if ($scope.view.type=='detail') {
            $scope.defaultImageHeight = 200;
            $scope.thing = ThingService.one($scope.view.thing, $scope.thingId);
            $scope.thing.$loaded().then(function() {
                angular.forEach($scope.view.fields, function(field) {
                    // fill in default search terms
                    if(field.defaultSearchTerm) {
                        $scope.searchTerms[field.name] = $scope.thing[field.defaultSearchTermField];
                    }
                    // create empty object
                    if($scope.objectField(field.name).type=='link') {
                        $scope.thing[field.name] = $scope.thing[field.name] || {};
                    }
                });
            });
        }
        
        $scope.asHtml = function(val) {
            return $sce.trustAsHtml(val);
        };
          
        $scope.youTubeEmbed = function(val) {
            return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + val.split('?v=')[1]);
        };
          
        $scope.objectField = function(name) {
           return $scope.thingDef.fields[name];  
        };
       
        $scope.toggleView = function() {
            $scope.view.visible = !$scope.view.visible;
        };
        
        $scope.addThing = function(keepOpen) {
            ThingService.add($scope.view.thing, $scope.thing);
            $scope.thing = {};
            if (!keepOpen) {
                $scope.view.visible = false;
            }
        };
        
        $scope.removeThing = function(id) {
            ThingService.remove($scope.view.thing, id);
        };
        
        $scope.removeThingFromDetail = function() {
            ThingService.remove($scope.view.thing, $scope.thing.$id);
            $location.path('#/' + $scope.view.returnFromDeleteTo)
        };
          
        $scope.updateThing = function() {
            ThingService.update($scope.thing);
            $scope.updateMode = false;
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