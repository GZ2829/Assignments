const express = require('express')
const userRouter = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')


userRouter.post('/signup', (req,res,next) =>{
    bcrypt.hash(req.body.password, 10,(err, hash) =>{
        if (err){
            res.sendStatus(500).json({
                error: err
            })
        } else {
            const user = new User({
                name: req.body.name,
                password: hash
            })
            user.save((err, newUser) =>{
                if(err) return res.sendStatus(500)
                    return res.send(newUser)
            })
        }
    })
})

userRouter.delete('/:userId', (req, res) =>{
    User.findByIdAndRemove(req.params.userId, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})

userRouter.get('/', (req,res)=>{
    User.find((err, users) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})


module.exports = userRouter;