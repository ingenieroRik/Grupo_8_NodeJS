
const path = require("path");
const { json } = require("express");

const fs = require("fs");

//defino la ruta donde estan los archivos Json
const productsPath = path.join(__dirname, "../data/listaProductos.json");


//leo los archivos json y los guardo en variables
const productosJson = JSON.parse(fs.readFileSync(productsPath, "utf-8"));


const adminControllers = {
   
    admin: (req,res) => res.render('admin.ejs', { products:productosJson }),
    create: (req,res) => res.render( 'create.ejs'),
    edit: (req,res) => res.render( 'edit.ejs')
}

module.exports = adminControllers;