const mongoose = require('mongoose');
const CommentSchema = require("./comment.model")
const RatingSchema = require("./comment.rating")
const CommentSchema = require("./comment.model")

//simple schema
const Page = new mongoose.Schema({
  name: {
    subject: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  comments: {
    type: [CommentSchema],
    required: true
},
ratings: {
  type: [RatingSchema],
  required: true
},
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  //give different access rights if admin or not 
  isAdmin: Boolean
});



const User = mongoose.model('User', UserSchema);

exports.User = User; 

