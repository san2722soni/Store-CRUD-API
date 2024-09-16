const express = require('express');
const Product = require("../models/product.model.js");
const { getProducts, getProduct, createProduct, deleteProduct, updatedProduct } = require('../controllers/product.controller.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);

router.post ('/', createProduct);

//update a product
router.put('/:id', updatedProduct);

//delete a product
router.delete('/:id', deleteProduct);


module.exports = router;