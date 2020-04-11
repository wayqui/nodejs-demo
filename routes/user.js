const express = require("express");
const path = require("path");
const parser = require("body-parser");
const { products } = require('./admin');

const router = express.Router();

router.use(parser.urlencoded({
    extended: false
}));

router.get("/", (req, res, next) => {
    console.log("Product: ", products);
    res.render('shop', {pageTitle:"My shopping store", prods: products});
});

module.exports = router;