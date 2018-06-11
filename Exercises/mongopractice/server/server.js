const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskmanager')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/todo', require('./routes/todo'))


app.listen(9410, ()=>{
    console.log('server is running on port 9410')
});

