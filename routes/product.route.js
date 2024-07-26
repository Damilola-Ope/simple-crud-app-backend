const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct,deleteProduct } = require('../controllers/product.controller');

//Create
router.post('/', createProduct);

// Read
router.get('/', getProducts);
router.get('/:id', getProduct);

//update
router.put('/:id',updateProduct);

//delete
router.delete('/:id',deleteProduct);

module.exports = router;