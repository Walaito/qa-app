const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create schema
const answerSchema = new Schema({
  answertext: { type: String, required: true }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Answer', answerSchema);

module.exports = Exercise;