import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //delete space
    unique: 1, // no overlap
  },
  password: {
    type: String,
    maxlength: 200,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  //role == administrate to manage
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
