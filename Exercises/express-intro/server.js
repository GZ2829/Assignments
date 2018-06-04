const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')

app.use(bodyParser.json());

app.get('/dogs', (req, res) =>{
    res.send([{name: 'Ladybird',
                type: 'Bloodhound',
                    age: 13}])
})

app.listen(5001, ()=>{
    console.log('Server is running on port 5001')
});