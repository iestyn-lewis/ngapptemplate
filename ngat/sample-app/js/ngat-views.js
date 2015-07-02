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
                {name:'name', class:"h3", detailLink: true}, 
                {name:'picture', height:"100", detailLink: true},
                {name:'meal_type'},
                {name:'tried', editable: true}
            ],
            allowDelete: true
        },
    
        recipe_detail: {
            thing: 'recipe',
            type: 'detail',
            fields: [
                {name:'name', class: 'h1'}, 
                {name:'meal_type', class: 'h4'}, 
                {name:'picture', height:'200', defaultSearchTerm: [['name']]}, 
                {name:'tried'},
                {name:'serves', caption: true}, 
                {name:'ingredients', caption: true},
                {name:'preparation', caption: true},
                {name:'notes', caption: true},
                {name:'link', defaultSearchTerm: [['name'], 'recipe'], caption: true},
                {name:'video', defaultSearchTerm: [['name']], caption: true}
            ],
            updateModeOnly: false,
            printButton: true
        },
    
       add_recipe: {
           thing: 'recipe',
           type: 'add',
           visible: false,
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
                {name:'name', detailLink: true},
                {name: 'default'}
            ]
        },
    
       add_recipe_type: {
           thing: 'recipe_type',
           type: 'add',
           visible: false,
           fields: [
               {name: 'name'},
               {name: 'default'}
           ],
           updateModeOnly: true
       },
    
      recipe_type_detail: {
          thing: 'recipe_type',
          type: 'detail',
          fields: [
              {name: 'name'},
              {name: 'default'}              
          ],
          updateModeOnly: true
      }
    
    });