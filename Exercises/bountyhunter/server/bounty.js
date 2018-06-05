const express = require('express');
const bountyRouter = express.Router()

const bounties=[{firstName: 'Julio',lastName: 'Maltiqauo', isLiving: true, bountyAmount: 5000, type:'Jedi', id: 1},
                {firstName: 'Darth',lastName: 'Plagus', isLiving: true, bountyAmount: 150000, type:'Sith', id: 2},
                {firstName: 'Knight',lastName: 'Himilkilson', isLiving: true, bountyAmount: 25000, type:'Jedi', id: 3 },
                {firstName: 'Master',lastName: 'Yoda', isLiving: true, bountyAmount: 500000, type:'Jedi', id: 4},
                {firstName: 'Darth',lastName: 'Malak', isLiving: true, bountyAmount: 5000, type:'Sith', id: 5}]





bountyRouter.route('/')
.get((req, res) =>{
    res.send(bounties)
})
.post((req, res) => {
    req.body.id = uuidv1();
    bounties.push(req.body);
    res.send(req.body);
})



bountyRouter.route('/:id')
.get((req,res) =>{
    const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id));
    res.send(foundBounty)  
})
.put((req,res) =>{
    bounties.forEach(item => {
        if(item.id === Number(req.params.id)) {
            item = Object.assign(item, req.body)}})
        res.send(bounties)
})
.delete((req,res) =>{
    for(let key in bounties){
        if(bounties[key].id=== Number(req.params.id)){
            bounties.splice(key, 1)}} 
        res.send(bounties)
        console.log('deleted motherfucker')
})


module.exports = bountyRouter;