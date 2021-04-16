const mongoose = require('mongoose');

const colourSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  hex: {type: String, required: true},
})

module.exports = mongoose.model('colour', colourSchema);
