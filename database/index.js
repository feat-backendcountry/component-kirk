const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true})
  .then( () => console.log('Connected to mongodb'))
  .catch( err => console.error('Unable to connect to mongodb'));

const itemSchema = mongoose.Schema({
  id: {type: Number, required: true},
  brand: {type: String, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  sale: {
    isOnSale: {type: Boolean, required: true},
    percentOff: {type: Number, required: true}
  },
  isExclusive: {type: Boolean, required: true},
  sizes: {
    valueUs: {type: String, required: true},
    valueUsEu: {type: String, required: true},
    isUsEu: {type: Boolean, required: true},
    isInStock: {type: Boolean, required: true}
  },
  images: {type: Array, required: true},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;