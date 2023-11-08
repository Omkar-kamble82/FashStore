const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        type: [],
    }
}, { timestamps: true })

module.exports = mongoose.model('Store', storeSchema)