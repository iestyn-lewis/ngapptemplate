angular
    .module('app')
    .value('THINGS', {

        recipe_type: {
            fields: {
                name: {type: 'string', display: 'Name'}
            }  
        },
       
        recipe: {
            fields: {
                name: {type: 'string', display: 'Name'},
                picture: {type: 'image', display: 'Picture (URL)'},
                meal_type: {type: 'picklist', display: 'Meal Type', picklist: 'recipe_type'},
                serves: {type: 'number', display: 'Serves'},
                ingredients: {type: 'note', display: 'Ingredients'},
                preparation: {type: 'note', display: 'Preparation'},
                notes: {type: 'note', display: 'Notes'}
            }
        }
    
    });