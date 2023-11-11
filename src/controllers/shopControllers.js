
const path = require("path");
const { json } = require("express");

const fs = require("fs");


//defino la ruta donde estan los archivos Json
const allFunkosPath = path.join(__dirname, "../data/dataFunkos.json");


//leo los archivos json y los guardo en variables
const funkosJson = JSON.parse(fs.readFileSync(allFunkosPath, "utf-8"));


const shopControllers = {
   
    shop2:(req,res) =>  {

        return  res.render('shop2.ejs', { allFunkos : funkosJson });
    },
   
    cart: (req,res) => res.render('cart.ejs'),

    items: (req,res) => res.render('item.ejs')

    //edit_item: (req,res) => res.sendFile( path.join(__dirname,'../views/item/:id.html')),
}

module.exports = shopControllers;