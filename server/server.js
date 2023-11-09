require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const storeRoute = require('./routes/storeRoute')

const app = express()

app.use(express.json())

const allowedOrigins = [
    process.env.CLIENT,
    process.env.LOCAL
]

var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}    

app.use(cors(corsOptions));

app.use("/api/store", storeRoute);

mongoose.set('strictQuery', true).connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
}) 

module.exports = { app }