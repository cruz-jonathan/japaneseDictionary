const mongoose = require('mongoose');

const timeSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  context: {type: String, required: true}, //days of week/months
})

module.exports = mongoose.model('time', timeSchema);
