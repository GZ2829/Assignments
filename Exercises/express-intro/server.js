const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1');
const mongoose = require('mongoose')

app.use(bodyParser.json());

var Schema = mongoose.Schema

var dogSchema= new Schema({
    name:{
        type: String,
        unique: false,
        required: true,
        lowercase: true
    }, 
     age: {
         type: Number,
         unique: false,
         required: true,
    },
    breed: {
        type: String,
        unique: false,
        lowercase: true,
        required: false,
    },
    isDead: {
        type: Boolean,
        unique: false,
        required: false,
    }
})

app.get('/dogs', (req, res) =>{
    res.send([{name: 'Ladybird',
                type: 'Bloodhound',
                    age: 13}])
})

app.listen(5001, ()=>{
    console.log('Server is running on port 5001')
});