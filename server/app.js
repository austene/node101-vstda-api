const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true})); // to support URL-encoded bodies
app.use(bodyParser.json()); // to support JSON-encoded bodies



// add your code here
var myArray = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

//GET homepage
app.get('/', (req, res) => {
    res.send({ status: 'ok' }).status(200);
});

//GET send all todo items from array list
app.get('/api/TodoItems', (req, res) => {
    res.send(myArray);
});

//GET send single todo item from array list
app.get('/api/TodoItems/:number', (req, res) => {
    var itemId = req.params.number;
    for(var i = 0; i <myArray.length; i++) {
        if(myArray[i].todoItemId == itemId) {
            res.send(myArray[i]); 
            break;
        };
    };
});

//POST add a single todo item to array list
app.post('/api/TodoItems/', (req, res) => {
    var foundItem = false;
    for(var i = 0; i <myArray.length; i++) {
        if(myArray[i].todoItemId == req.body.todoItemId) {
            //rewrite item
            myArray[i] = req.body;
            foundItem = true;
            break;
        };
    };
    //push item to array
    if(foundItem == false) {
        myArray.push(req.body);
    };
    res.status(201).send(req.body);
});

//DELETE delete a single todo item
app.delete('/api/TodoItems/:number', (req, res) => {
    var foundItem = false;
    var number = req.params.number;
    for(var i = 0; i <myArray.length; i++) {
        if(myArray[i].todoItemId == number) {
            //delete item
            var deletedItem = myArray[i];
            myArray.splice(number, 1);
            console.log('deleted item from myArray');
            foundItem = true;
            break;
        };
    };
    if(foundItem) { //if foundItem is true (found and deleted), respond with deletedItem
        res.status(200).send(deletedItem);
    } else { //if foundItem is false (item not found in array list), respond with 404 and request body
        res.status(404).send(req.body);
    };  
});

module.exports = app;
