const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskmanager');

app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('/issue', require('./routes/issue'));

app.listen(6000, ()=>{
    console.log('Its Running')
})