var express = require('express');
var router = express.Router();
const charactersModel = require('../Model/charactersModel');



router.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 1336) + 1;
    charactersModel.find({id : random}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/ByName',(req, res) => {
    charactersModel.find({ Name : req.query.name }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/', (req, res) => {
    charactersModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})



router.get('/:id', (req, res) => {
    charactersModel.find({id : req.params.id }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router;

