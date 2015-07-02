angular
    .module('app')
    .value('PAGES', {

        recipes: {
            title: 'Recipes',
            default: true,
            views: [
               'all_recipes',
               'add_recipe'
            ]
        },
       
        recipe: {
            detailPage: true,
            views: [
                'recipe_detail'
            ]
        },
    
        recipe_types: {
            title: 'Recipe Types',
            views: [
                'all_recipe_types',
                'add_recipe_type'
            ]
        },
    
        recipe_type: {
            detailPage: true,
            views: [
                'recipe_type_detail'
            ]
        }
    
    });