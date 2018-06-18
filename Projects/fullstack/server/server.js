const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskmanager');

const userRoutes = require('./routes/user')

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/user', userRoutes)

app.listen(3724, ()=>{
    console.log('Up and Running on port: 3724')
})