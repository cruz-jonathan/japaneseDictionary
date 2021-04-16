const mongoose = require('mongoose');

const verbSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  type: {type: String, required: true}, //U, RU, Irr
  presentPositive: {type: String, required: true},
  presentNegative: {type: String, reqiured: true},
  pastPositive: {type: String, required: true},
  pastNegative: {type: String, required: true},
})

module.exports = mongoose.model('verb', verbSchema)
