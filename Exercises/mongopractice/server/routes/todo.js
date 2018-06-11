const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')


todoRouter.get('/', (req,res) =>{
    Todo.find((err, todos) =>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(todos)
    })
})

todoRouter.get('/:id', (req, res) =>{

})

todoRouter.post('/', (req,res)=>{
    const todo = new Todo(req.body);
    todo.save((err, newTodo) =>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTodo)
    })
})

todoRouter.put('/:id', (req,res)=>{
     Todo.findByIdAndUpdate(
         {_id: req.params.id},
          req.body,
         {new: true}),
         (err, updatedTodo) =>{
             if (err) return res.status(500).send(err);
             return res.send(updatedTodo)
         }
})

todoRouter.delete('/:id', (req,res)=>{
    Todo.findByIdAndRemove({_id: req.params.id}, (err, deletedTodo) =>{
        if (err) return res.status(500).send(err);
        return res.send({message: 'todo has been deleted', deletedTodo})
    })
})




module.exports = todoRouter