var express = require('express');
const { reset } = require('nodemon');
var router = express.Router();

const quoateModel = require('../Model/quotesModel');

router.get('/', (req, res) => {
    quoateModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 51) + 1;
    quoateModel.find({ id : random }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/:id', (req, res) => {
    quoateModel.find({ id : req.params.id }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router;