angular
    .module('app')
    .value('VIEWS', {

        all_recipes: {
            thing: 'recipe',
            type: 'list',
            style: 'card',
            filters: [
                'name',
                'meal_type'
            ],
            fields: [
                {name:'name', class:"h3"}, 
                {name:'meal_type'},
                {name:'picture', height:"100"}
            ],
            allowDelete: true
        },
    
        recipe_detail: {
            thing: 'recipe',
            type: 'detail',
            fields: [
                {name:'name', class: 'h1'}, 
                {name:'meal_type', class: 'h4'}, 
                {name:'picture', height:'200', defaultSearchTermField: 'name'}, 
                {name:'serves', caption: true}, 
                {name:'ingredients', caption: true},
                {name:'preparation', caption: true},
                {name:'notes', caption: true},
                {name:'link', defaultSearchTermField: 'name', caption: true},
                {name:'video', defaultSearchTermField: 'name', caption: true}
            ],
            confirmButton: {title: "Save"},
            cancelButton: true,
            printButton: true,
            allowDelete: true,
            returnFromDeleteTo: 'recipes'
        },
    
       add_recipe: {
           thing: 'recipe',
           type: 'add',
           visible: false,
           toggleButton: {title: "Add Recipe", type: "add"},
           confirmButton: {title: "Save"},
           cancelButton: true,
           fields: [
               {name: 'name'},
               {name: 'meal_type'}
           ]
       },
    
       all_recipe_types: {
            thing: 'recipe_type',
            type: 'list',
            style: 'table',
            allowDelete: true,
            fields: [
                {name:'name'}
            ]
        },
    
       add_recipe_type: {
           thing: 'recipe_type',
           type: 'add',
           visible: false,
           toggleButton: {title: "Add Recipe Type", type: "add"},
           confirmButton: {title: "Save"},
           cancelButton: true,
           fields: [
               {name: 'name'}
           ]
       }
    
    });