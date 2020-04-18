const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create schema
const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Question', questionSchema);

module.exports = Exercise;