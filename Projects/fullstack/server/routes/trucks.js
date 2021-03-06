const express = require('express')
const truckRouter = express.Router()
const Trucks = require('../models/trucks')
const checkAuth = require('../middleware/check-auth')


truckRouter.get('/', (req,res)=>{
    Trucks.find((err, users) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})
truckRouter.get('/:id', (req,res)=>{
    Trucks.findById(req.params.id, (err, load)=>{
        if(err) return res.status(500).send(err)
        return res.status(201).send(load)
    })
})

truckRouter.post('/', (req,res)=>{
    const rucks = Trucks(req.body);
    rucks.save((err, newTruck)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

truckRouter.put('/:id', (req,res)=>{
    Trucks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updated)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(updated)
    })
})

truckRouter.delete('/:id', (req, res) =>{
    Trucks.findByIdAndRemove(req.params.id, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})


module.exports =  truckRouter;