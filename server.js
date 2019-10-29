const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./knexfile');
const configuration = require('../knexfile')[environment]; 
const db = require('knex')(configuration); 
const app = express();

// Get all row in table---------- db.select().from('table_name').then(data);
// Save and return result---------- db.insert(req.body).returning().into('table_name').then(data);
app.use(bodyParser.json());

// for save todos
app.post('/api/todos', (req, res) => {
    db.insert(req.body).returning('*').into('link').then(data => res.send(data));
});

// for gets todos
app.get('/api/todos', (req, res) => {
    db.select().from('link').then(todos => res.send(todos));
});

// for update todo
app.put('/api/todos/:todo_id', (req, res) => {
    db.select().from('link').where({id: req.params.todo_id}).update(req.body).returning('*').then(todo => res.send(todo));
});

// for delete todo
app.delete('/api/todos/:todo_id', (req, res) => {
    db.select().from('link').where({id: req.params.todo_id}).del().then(todo => res.send({success: true}));
});

// for get todo by id
app.get('/api/todos/get/todo/one/:todo_id', (req, res) => {
    db.from('link').where({id: req.params.todo_id}).returning('*').then(todo => res.send(todo));
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server listen at port ${port}`));






