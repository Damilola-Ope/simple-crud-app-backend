const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    img: {
      type: String,
      required: false
    }
  },
  {
    //this is an object that mongoDB uses to automatically generate
    timestamps:true,
  }
)


//allowing mongoDB to recognize this as a model
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;