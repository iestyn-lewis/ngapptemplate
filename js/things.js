angular
    .module('app')
    .value('THINGS', {

        recipe_type: {
            fields: {
                name: {type: 'string', display: 'Name'}
            }  
        },
    
        measure_unit: {
           fields: {
               name: {type: 'string', display: 'Name'},
               abbreviation: {type: 'string', display: 'Abbreviation'}
           }  
        },
    
        recipe: {
            relations: {
               child_of: ['recipe_type']  
            },
            fields: {
                name: {type: 'string', display: 'Name'},
                picture: {type: 'image'},
                meal_type: {type: 'string', display: 'Meal Type', picklist: {object: 'recipe_type', field: 'name'}},
                serves: {type: 'number', display: 'Serves'},
                preparation: {type: 'string', display: 'Preparation'},
                notes: {type: 'string', display: 'Notes'}
            }
        },
    
        ingredient: {
            relations: {
                child_of: ['recipe']  
            },
            fields: {
                amount: {type: 'number'},
                unit: {type: 'string', picklist: {object: 'measure_unit', field: 'name'}},
                description: {type: 'string'},
                notes: {type: 'string'}
            }
        }
    
    });