const mongoose = require('mongoose');

const nounSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  context: {type: String, required: true}, //person place or thing
})

module.exports = mongoose.model('noun', nounSchema);
