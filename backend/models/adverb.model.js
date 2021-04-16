const mongoose = require('mongoose')

const adverbSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  context: {type: String, required: true},
})

module.exports = mongoose.model('adverb', adverbSchema)
