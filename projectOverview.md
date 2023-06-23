 ### How are you going to build the Menu project ?

 ## What is the Menu project going to do?
    - Well the menu project is going to simply show food items for a customary restaurant with the following information:
        - The price tag
        - An image of the look of the meal
        - The Name of the item.
        - A brief description of the item on the menu.
        - On top of the menu there is going to be a section for filtering out some of the items by category.

## Steps to build the project in general
    - Well you may need to use some of the technologies listed below:
        - HTML for markup
        - CSS for styling the project (TailwindCSS or SASS or less etc) for a framework.
        - JavaScript for the interactivity of the project.
        
### JavaScript Steps for the project
    - You must have a source of the data that you are going to use for example from an api or some data stored locally. This data should be inform of a object if stored locally and if it is from an api then it should be in form of json.
    - By this time you should have a simple example of markup in the html already to see how it is going to look.
    - Then in JavaScript you should set up a functionality in way that when the page loads in the browser, a set of images from where you stored the data and other forms of data should show up on the web page. For this you will have put an event listener on the window. And for the data stored or sent via an api you should loop through that data using some kind of loop and for each iteration that goes by you will have to wrap up the object values stored into some basic markup that is from the data and then send this data to the web page using basic JavaScript DOM Concepts.

## The button logic for filters
    - For the buttons also since you have your data already in check, the buttons are going to be grouped by category for example "breakfast", "dinner" etc. So you must find a way to get the data by category in an array or any form of storing groups of data in your language (remember, the category should only appear once in the array hence you should also find a way of not having repeated data categories). Then you should generate the buttons according the categories that are available in the storage or that have been sent back. For each button when clicked it should filter the meals or items by that category and display only those on the screen, there should also be an "all" filter which will just show all of the items when clicked.

