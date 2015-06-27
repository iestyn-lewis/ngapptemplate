angular
    .module('app')
    .value('VIEWS', {

        all_recipes: {
            thing: 'recipe',
            type: 'list',
            style: 'card',
            filters: [
                {display: 'Meal Type', type: 'picklist', parent: 'recipe_type'}
            ],
            fields: [
                {name:'name', class:"h3"}, 
                {name:'meal_type'},
                {name:'picture', width:"100"}
            ],
            allowDelete: true
        },
    
        recipe_detail: {
            thing: 'recipe',
            type: 'detail',
            fields: [
                {name:'name', class: 'h1'}, 
                {name:'meal_type', class: 'h4'}, 
                {name:'serves', caption: true}, 
                {name:'picture'}, 
                {name:'ingredients', caption: true},
                {name:'preparation'},
                {name:'notes', caption: true}
            ],
            confirmButton: {title: "Save"},
            cancelButton: true,
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
               {name: 'name'}
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
       },
    
       all_measure_units: {
            thing: 'measure_unit',
            type: 'list',
            style: 'table',
            allowDelete: true,
            fields: [
                {name:'name'},
                {name: 'abbreviation'}
            ]
        },
    
       add_measure_unit: {
           thing: 'measure_unit',
           type: 'add',
           visible: false,
           toggleButton: {title: "Add Measure Unit", type: "add"},
           confirmButton: {title: "Save"},
           cancelButton: true,
           fields: [
               {name: 'name'},
               {name: 'abbreviation'}
           ]
       }
    
    
    });