angular
    .module('app')
    .value('NAVIGATION', [

        {
            view: 'cookbook',
            caption: 'Cookbooks'
        },
    
        {
            view: 'recipe',
            caption: 'Recipes'
        },
          
        {
            view: 'person',
            caption: 'Contributors'
        },
    
        {
            view: 'recipe_type',
            caption: 'Recipe Types'
        }
   
    ]);