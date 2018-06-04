const express = require('express');
const app = express();



app.get('/cats', (req,rec)=>{
    res.send([{name: 'Mr. Peanut Butter',
                    type: 'Siamese',
                        age: 10}])
});



app.listen(5992, ()=>{
    console.log('Were running on port 5992 captain');
});