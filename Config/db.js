const mongoose = require('mongoose');
const charactersModel = require('../Model/charactersModel');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then((result) => {
        console.log('Connected to MongoDB !!!');
        charactersModel.find({}, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    })} catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.export = connectDB();
