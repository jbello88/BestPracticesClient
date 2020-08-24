const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ElementSchema = new Schema({
    title: {type: String, max: 200},
    text: {type: String,  max: 2000},
    text: {type: String,  max: 200},

}, {
    timestamps: true
})

module.exports = ElementSchema