const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./Config/db');
const charactersRouter = require('./Routers/charactersRouter');
const seasonsRouter = require('./Routers/seasonsRouter');
const quoateRouter = require('./Routers/quotesRouter');
const episodesRouter = require('./Routers/episodesRouter');

connectDB.connectDB;

app.use(express.json());
app.use(cors());

app.use('/api/characters', charactersRouter);
app.use('/api/seasons', seasonsRouter);
app.use('/api/quote', quoateRouter);
app.use('/api/episodes', episodesRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './', 'dist', 'index.html'))
    });
}

app.listen(process.env.PORT, () => {
    console.log(`the server are running on ${process.env.PORT}`)
})
