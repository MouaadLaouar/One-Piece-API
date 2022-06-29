const mongoose = require('mongoose')

const episodeSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    AirDate: {
        type: String,
        required: true
    },
    Titles: {
        type: String,
        required: true
    }
})

const episodeModel = mongoose.model('episodes', episodeSchema);

module.exports = episodeModel;