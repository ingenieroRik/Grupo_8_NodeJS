
const path = require("path");

const mainControllers = {

        // si no usamos ejs hay que usar rutas absolutas
        home: (req,res) => res.sendFile(path.join(__dirname,'../views/index.html')),
        register: (req,res) => res.sendFile(path.join(__dirname,"../views/register.html")),
        contact: (req,res) => res.sendFile(path.join(__dirname,"../views/register.html")),
       
        login: (req,res) => res.sendFile( path.join(__dirname,'../views/login.html')),

        // con ejs seria asi
        /*
        contact : (req,res) => {

                return res.render("register_old.ejs",);
        }
        */
}

module.exports = mainControllers;