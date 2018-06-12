const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');


issueRouter.get('/', (req,res)=>{
    Issue.find((err, issues) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(issues)
    })
})

issueRouter.get('/:id', (req,res)=>{
      Issue.findById({_id: req.params.id }, (err, issue)=>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(issue)

      })
})

issueRouter.post('/', (req,res)=>{
    const issue = new Issue(req.body);
    issue.save((err, newIssue)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newIssue)
    })
})

issueRouter.put('/:id', (req,res)=>{
    Issue.put(
        {_id: req.params.id},
        req.body,
        ({new: true}),
        (err, updatedIssue)=>{
            if (err) return res.status(500).send(err)
            return res.send(updatedIssue)
        }
    )
})

issueRouter.delete('/:id', (req,res)=>{
    Issue.findByIdAndRemove({_id: req.params.id}, (err, deleted) =>{
        if (err) return res.status(500).send(err);
        return res.send({message: 'Issue is gone'}, deleted)
    })
})


module.exports = issueRouter;