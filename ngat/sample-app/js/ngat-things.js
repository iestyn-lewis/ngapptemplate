angular
    .module('app')
    .value('THINGS', {

        recipe_type: {
            display: 'Recipe Type',
            fields: {
                name: {type: 'string', display: 'Name'},
                default: {type: 'checkbox', display: 'Default'}
            }  
        },
       
        recipe: {
            display: 'Recipe',
            fields: {
                name: {type: 'string', display: 'Name'},
                picture: {type: 'image', display: 'Picture'},
                link: {type: 'link', display: 'Reference'},
                person: {type: 'picklist', display: 'Author', picklist: 'person'},
                cookbook: {type: 'picklist', display: 'Cookbook', picklist: 'cookbook'},
                meal_type: {type: 'picklist', display: 'Meal Type', picklist: 'recipe_type'},
                serves: {type: 'number', display: 'Serves'},
                ingredients: {type: 'note', display: 'Ingredients'},
                preparation: {type: 'note', display: 'Preparation'},
                notes: {type: 'note', display: 'Notes'},
                video: {type: 'video', display: 'Video'},
                tried: {type: 'checkbox', display: 'Tried It'}
            }
        },
    
        cookbook: {
            display: 'Cookbook',
            fields: {
                name: {type: 'string', display: 'Name'},
                picture: {type: 'image', display: 'Picture'},
                description: {type: 'note', display: 'Description'}
            }
        },
    
        person: {
            display: 'Person',
            fields: {
                name: {type: 'string', display: 'Name'},
                picture: {type: 'image', display: 'Picture'},
                description: {type: 'note', display: 'Description'}
            }
        }
    
    });