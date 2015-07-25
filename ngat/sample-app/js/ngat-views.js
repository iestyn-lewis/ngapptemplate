angular
    .module('app')
    .value('VIEWS', {
    
        person: {
            list: {
                title: 'People',
                fields: [
                    {name:'name', class:"h3", detailLink: true}, 
                    {name:'picture', height:"100", detailLink: true}
                ],
                allowDelete: true
            },

            detail: {
                fields: [
                    {name:'name', class: 'h1'}, 
                    {name:'picture', height:'200', defaultSearchTerm: [['name']]}, 
                    {name:'description'}
                ],
                updateModeOnly: false
            },

           add: {
               fields: [
                   {name: 'name'}
               ]
           }  
        },
    
        cookbook: {
            default: true,
            list: {
                title: 'Cookbooks',
                fields: [
                    {name:'name', class:"h3", detailLink: true}, 
                    {name:'picture', height:"100", detailLink: true}
                ],
                allowDelete: true
            },

            detail: {
                fields: [
                    {name:'name', class: 'h1'}, 
                    {name:'picture', height:'200', defaultSearchTerm: [['name'], 'cookbook']}, 
                    {name:'description'},
                    {pageLink: 'recipe', display: 'Recipes', filter: 'cookbook', class: 'h3'}
                ],
                updateModeOnly: false
            },

           add: {
               fields: [
                   {name: 'name'},
                   {name: 'description'}
               ]
           }
        },
    
        recipe: {
            list: {
                title: 'Recipes',
                filters: [
                    'cookbook',
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

            detail: {
                fields: [
                    {name:'name', class: 'h1'}, 
                    {name:'meal_type', class: 'h4'}, 
                    {name:'cookbook'},
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

           add: {
               fields: [
                   {name: 'name'},
                   {name: 'meal_type'},
                   {name: 'cookbook'}
               ]
           }
       },
    
       recipe_type: {
           list: {
                style: 'table',
                allowDelete: true,
                title: 'Recipe Types',
                fields: [
                    {name:'name', detailLink: true},
                    {name: 'default'}
                ]
            },

           detail: {
               fields: [
                   {name: 'name'},
                   {name: 'default'}
               ],
               updateModeOnly: true
           },

          add: {
              fields: [
                  {name: 'name'},
                  {name: 'default'}              
              ]
          }
      }
    
    });