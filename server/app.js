const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.ulrencoded({ extended: false})); // to support JSON-encoded bodies
app.use(bodyParser.json()); // to support URL-encoded bodies

const app = express();

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
console.log(myArray);

//GET homepage
app.get('/', (req, res) => {
    res.send('ok'); //?
});

//GET read all todo items from array list
app.get('/api/TodoItems', (req, res) => {
    res.send(myArray);
});

//GET read singe todo item from array list
app.get('/api/TodoItems/:number', (req, res) => {
    //    res.send(myArray[req.params.number]);
    var number = req.params.number;
    res.send(myArray[number]);
});

//POST create a single todo item
app.post('/api/TodoItems/', (req, res) => {
    res.send('POST request to page');
});

module.exports = app;
