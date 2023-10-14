const express = require ("express");

const router = express.Router();

router.get("/", (req,res) => res.sendFile("/home/rik/Escritorio/JS_NodeJS_codo_a_codo/Proyecto_Grupo_8/public/views/shop2.html"));
router.get("/item/:id", (req,res) => res.sendFile("/home/rik/Escritorio/JS_NodeJS_codo_a_codo/Proyecto_Grupo_8/public/shop2/item/:id.html"));
router.post("/item/:id/add", (req,res) => res.sendFile("./public/shop2/item/:id/add.html"));
router.get("/cart", (req,res) => res.sendFile("./public/shop2/cart.html"))
router.post("/item/id:/add", (req,res) => res.sendFile("./public/shop2/item/:id/add.html"));










module.exports = router;