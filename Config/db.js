const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then((result) => {
        console.log('Connected to MongoDB !!!');
    })
    })} catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.export = connectDB();
