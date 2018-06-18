const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.post('/signup', (req,res,next) =>{
    bcrypt.hash(req.body.password, 10,(err, hash) =>{
        if (err){
            res.sendStatus(500).json({
                error: err
            })
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
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

router.delete('/:userId', (req, res) =>{
    User.findByIdAndRemove(req.params.userId, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})

router.get('/', (req,res)=>{
    User.find((err, users) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})


module.exports = router;