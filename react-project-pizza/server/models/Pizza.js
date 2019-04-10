const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pizza', pizzaSchema);