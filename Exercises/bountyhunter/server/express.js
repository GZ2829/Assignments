const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')

app.use(bodyParser.json());

const bountyRouter = express.Router()

app.use('/bounties', require('./bounty'))

app.listen(5002, ()=>{
    console.log('Welcome to the jungle')
})