const mongoose = require('mongoose');

const SeasonSchema = new mongoose.Schema({
    Season: {
        type: Number,
        required: true
    },
    No: {
        type: String,
        required: true
    },
    StoryArc: {
        type: String,
        required: true
    },
    Episodes: {
        type: Number,
        required: true
    },
    OriginallyAired: {
        type: Object,
        requireed: true
    },
    SeriesDirection: {
        type: String,
        required: true
    },
    SeriesComposition: {
        type: String,
        required: true
    },
    CharacterDesign: {
        type: String,
        required: true
    }
})

const seasonsModel = new mongoose.model("seasons", SeasonSchema);

module.exports = seasonsModel;