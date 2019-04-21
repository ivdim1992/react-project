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

const Pizza = mongoose.model('Pizza', pizzaSchema);

Pizza.seedPizza= async () => {
    try {
      let pizzas = await Pizza.find();
      if (pizzas.length > 0) return;
     
      return Pizza.create({
        title: 'Italian',
        imageUrl: 'http://www.dominos.bg/gallery/fmobile/1355medium.png',
        ingredients: ['mozzarella,pesto,tomatoes'],
        price: 15,
      });
    } catch (e) {
      console.log(e);
    }
  };


module.exports = Pizza;