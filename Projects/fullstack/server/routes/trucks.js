const express = require('express')
const truckRouter = express.Router()
const mongoose = require('mongoose')
const Trucks = require('../models/trucks')


truckRouter.get('/', (req,res)=>{
    Trucks.find((err, users) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})

truckRouter.post('/', (req,res)=>{
    const rucks = Trucks(req.body);
    rucks.save((err, newTruck)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

truckRouter.delete('/:id', (req, res) =>{
    Trucks.findByIdAndRemove(req.params.id, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})


module.exports =  truckRouter;