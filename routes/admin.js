const express = require("express");
const parser = require("body-parser");
const path = require("path");

const router = express.Router();
const products = [];

router.use(parser.urlencoded({
    extended: false
}));

router.get("/products", (req, res, next) => {
    console.log("Form to create new product");
    res.sendFile(path.join(__dirname, '../', 'views',  'add-product.html'));
});

router.post("/products", (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/users");
});

module.exports.admin = router;
module.exports.products = products;
