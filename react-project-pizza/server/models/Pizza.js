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
    type: [],
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Pizza', pizzaSchema);