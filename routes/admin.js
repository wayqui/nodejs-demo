const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const { getAddProduct, postProduct } = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', postProduct);

exports.routes = router;
exports.products = products;
