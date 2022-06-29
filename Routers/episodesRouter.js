var express = require('express');
var router = express.Router();

const episodeModel = require('../Model/episodeModel');

router.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 1023) + 1;
    console.log(random)
    episodeModel.find({ id : random } , (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.get('/', (req, res) => {
    episodeModel.find({}, (err, result) => {
        if(err) {
            res.send(err) 
        } else {
            res.send(result)
        }
    })
})

router.get('/:id', (req, res) => {
    episodeModel.find({ id : req.params.id }, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})



module.exports = router;