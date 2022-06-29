var express = require('express');
var router = express.Router();
let seasonsModel = require('../Model/seasonsModel');


router.get('/StoryArc', (req, res) => {
    seasonsModel.find({ StoryArc : req.query.title }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 20) + 1;
    seasonsModel.find({Season : random}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})


router.get('/', (req, res) => {
    seasonsModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/:id', (req, res) => {
    seasonsModel.find({ Season : req.params.id }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router; 