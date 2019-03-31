const express = require('express');
const morgan = require('morgan');

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

app.get('/', (req, res) => {
    res.send('ok'); //?
});

app.get('/api/TodoItems', (req, res) => {
    res.send(myArray);
});

app.get('/api/TodoItems/:number', (req, res) => {
//    res.send(myArray[req.params.number]);
    var number = req.params.number;
    res.send(myArray[number]);
});

module.exports = app;
