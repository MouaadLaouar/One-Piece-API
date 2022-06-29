const mongoose = require('mongoose');

const quoateSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const quoateModel = new mongoose.model("quotes", quoateSchema);

module.exports = quoateModel;