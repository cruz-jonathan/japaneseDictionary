const mongoose = require ('mongoose');

const wordSchema = mongoose.Schema({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  context: {type: String, required: true}
});

module.exports = mongoose.model('Word', wordSchema);

/* Need to create multiple Schemas for each type of dictionary? OR
store in one giant collection and filter based on context */
