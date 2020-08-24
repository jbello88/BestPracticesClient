const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RatingSchema = new Schema({
    stars: {type: number, min: 0, max: 10, required: true},
    by: {type: sting, required: true}

    // Object Id to be added
}, {
    timestamps: true
})

module.exports = RatingSchema