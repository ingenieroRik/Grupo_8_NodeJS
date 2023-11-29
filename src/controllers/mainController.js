
const path = require("path");
const { json } = require("express");

const fs = require("fs");


//defino la ruta donde estan los archivos Json
const allFunkosPath = path.join(__dirname, "../data/dataFunkos.json");
const coleccionPath = path.join(__dirname, "../data/coleccion.json");

//leo los archivos json y los guardo en variables
const funkosJson = JSON.parse(fs.readFileSync(allFunkosPath, "utf-8"));
const coleccionJson = JSON.parse(fs.readFileSync(coleccionPath, "utf-8"));

const mainControllers = {

        
        home: (req,res) => {
                
            return  res.render('index.ejs', { coleccion : coleccionJson , allFunkos : funkosJson });

        },




        register: (req,res) => res.render("register.ejs"),
        contact: (req,res) => res.render("contact.ejs"),
       
        login: (req,res) => res.render( 'login.ejs'),

      
}

module.exports = mainControllers;