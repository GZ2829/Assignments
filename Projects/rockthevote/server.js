const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskmanager');

app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('')