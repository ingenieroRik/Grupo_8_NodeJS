const express = require ("express");
const shopControllers = require("../controllers/shopControllers");

const router = express.Router();

router.get("/shop2", shopControllers.shop2);
router.get("/items", shopControllers.items);
router.get("/cart", shopControllers.cart);
//router.get("/item/:id", shopControllers.edit_item);










module.exports = router;