
const path = require("path");
const { json } = require("express");

const fs = require("fs");


//defino la ruta donde estan los archivos Json
const productosPath = path.join(__dirname, "../data/funkos.json");


//leo los archivos json y los guardo en variables
const productosJson = JSON.parse(fs.readFileSync(productosPath, "utf-8"));


const shopControllers = {
   
    shop2:(req,res) =>  {

        return  res.render('shop2.ejs', { allFunkos : productosJson });
    },
   
    cart: (req,res) => res.render('cart.ejs'),

    items: (req,res) => res.render('item.ejs'),

}

module.exports = shopControllers;