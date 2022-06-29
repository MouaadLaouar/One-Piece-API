const mongoose = require('mongoose');

const CharactersSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Nickname: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Birthday: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Bounty: {
        type: String,
        required: true
    },
    DevvilFruits: {
        type: String,
        required: true
    },
    DevvilFruitsClass: {
        type: String,
        required: true
    },
    Haki: {
        type: Array,
        required: true
    },
    Img: {
        type: Number,
        required: true
    },
})

const charactersModel = new mongoose.model("characters", CharactersSchema);

module.exports = charactersModel;