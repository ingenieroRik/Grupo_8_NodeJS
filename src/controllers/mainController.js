
const path = require("path");
const { json } = require("express");

const fs = require("fs");


//defino la ruta donde estan los archivos Json
const productosPath = path.join(__dirname, "../data/funkos.json");

//leo los archivos json y los guardo en variables
const productosJson = JSON.parse(fs.readFileSync(productosPath, "utf-8"));

const mainControllers = {

        
        home: (req,res) => {
                
            return  res.render('index.ejs', { coleccion : productosJson });

        },




        register: (req,res) => res.render("register.ejs"),
        contact: (req,res) => res.render("contact.ejs"),
       
        login: (req,res) => res.render( 'login.ejs'),

      
}

module.exports = mainControllers;