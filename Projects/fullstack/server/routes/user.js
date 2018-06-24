const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


userRouter.post('/signup', (req,res) =>{
    bcrypt.hash(req.body.password, 10,(err, hash) =>{
        if (err){
            res.sendStatus(500).json({
                error: err
            })
        } else {
            const user = new User({
                email: req.body.email,
                password: hash,
                accountType: req.body.accountType,
                company: req.body.company,
                aboutYourself: req.body.aboutYourself
            },
        )
            user.save((err, newUser) =>{
                if(err) return res.sendStatus(500)
                    return res.send(newUser)
            })
        }
    })
})

userRouter.post('/login', (req,res)=>{
     User.findOne({email: req.body.email}, (err, user) => {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            console.log(user)
            if (err) {
                return res.status(401).json({
                    message: 'Authorization failed'
                })
            }
            if (result){
                  const token = jwt.sign({
                    email: user.email,
                    userId: user._id

                }, 'superSecret',
            {
                expiresIn: "1hr"
            })
                return res.status(200).json({
                    message: 'Authorization Successful',
                    token: token
                })
            }
            res.status(401).json({
                message: 'Authorization failed'
            })
        });
    });
});



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