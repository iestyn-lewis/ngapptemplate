# NGAppTemplate

A quick way to create a quick app, which you can further develop.

## Installation

Create a new Codio project.  Use Tools -> Terminal to open a new terminal.  In the terminal line, enter the following:

`git clone https://github.com/iestyn-lewis/ngapptemplate.git`

This will download the code and a sample app to your project.

To get the latest ngat version, you can then just run:

`git pull`

and the latest version will be installed

## Sample App Setup

The sample app is a recipe app.  To install it, open the ngat\sample-app folder.

Copy and paste all of the folders and files there into the top level folder of your project.

## Testing the Sample App

In the Terminal window, you'll see your Codio box domain.  Go to another tab and enter that address.  You should see a list of recipes!

## NGAT Concepts

NGAT is built around the concepts of Things, Fields, Views, Pages, and Navigation.  

* Things are what you want to manage.  Things could be:
    * Songs
    * Stuffed Animals
    * Recipes
    * Practice Records

* Fields are the properties or attributes of what you want to manage.  For example, for a stuffed animal you might want to record:
    * Name
    * Species
    * Date Received
    * Picture
    
* Views are ways to look at your things.  For example, you might want to be able to view:
    * A list of stuffed animals
    * Detailed information about a single stuffed animal
    
* Pages are a collection of one or more views that make up a page on your website

* Navigation is the interface that is presented to the user in the navigation bar
    
### Configuring Things

Things are configured in the file js\ngat-things.js.   
You can add the things you want to manage, and configure their fields.

#### Options

* display - the name of the thing to show to the user

#### Fields

Each field has:
* Name - what the field is called 
* Type - what type of field it is
* Display - the name of the field to show to the user, which can be capitalized and have spaces, etc.

Field Types
* string
* number
* note
* picklist
    * This field type has one more configuration option, picklist - this is a thing that this field should draw from for its values
* image
* video
* link

### Configuring Views

Views are configured in the file js\ngat-views.js.  

Each view has:
* Name - what the view is called
* Thing - what the view is looking at
* Type - one of
    * 'list' - a list of things
    * 'detail' - show or edit one thing
    * 'add' - add a thing
* Style - how to display your items
    * 'table' - a table of things
    * 'card' - a pinterest-like view of things - works best with pictures
* Fields - the fields you want to show.  These must all be present on the 'thing' you are viewing.
    * name - the name of the field
    * class - the css style you want to apply to the field
* Options
    * updateModeOnly - if true, the form will only have an update mode, no display mode.  
    Useful for things you expect only to edit.
    * allowDelete - if true, you will be able to delete items (after confirmation) from this view
    * printButton - if true, a print button will appear for this view

### Configuring Pages

Pages are configured in the file js\ngat-pages.js

Each page has:
* title - the header text that will appear at the top of the page
* views - the views that will be presented on the page, in the order they are to be presented

### Configuring Navigation

Navigation is configured in the file js\ngat-navigation.js.

Each object in the navigation array represents a menu item.  Each menu item has:
* page - the page that is to be displayed, if any, when the menu item is clicked
* caption - the caption for the menu
* subMenu - an optional array, containing objects with pages and captions, that should appear as a submenu of this menu item.