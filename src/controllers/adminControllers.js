
const path = require("path");
const { json } = require("express");

const fs = require("fs");

//defino la ruta donde estan los archivos Json
const productsPath = path.join(__dirname, "../data/funkos.json");
const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");

//leo los archivos json y los guardo en variables
const usuariosJS = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
const productosJson = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

const adminControllers = {
   
    admin: (req,res) => {

        // en usuarioLogueado tengo los datos de la persona que se logueo con email y
        // contraseña, puede ser el administrador o un usuario, si es el administrador
        // va poder acceder a las paginas de edicion y creacion. En este caso si es un
        // usuario se queda en login y si no es ninguno, va al home
        const usuarioLogueado = req.body;
        console.log (req.body);
     
        for (let i = 0; i < usuariosJS.length; i++) {
   
// ************************  administrador  ******************************
      if (
        usuariosJS[i].email == usuarioLogueado.email && usuariosJS[i].clave == usuarioLogueado.clave) {

           return res.render('admin.ejs', { products:productosJson })
          
       }

//  *******************************  usuario  ******************************
        else if ( usuariosJS[i].clave == "usuario"  && usuariosJS[i].rol == "usuario") {
         
           return res.render('login.ejs');
            
      };
    };
// *************************  ninguno ****************************

      return res.render("index.ejs",{ coleccion : productosJson }) ;
        
    },
    create: (req,res) => res.render( 'create.ejs'),
    edit: (req,res) => res.render( 'edit.ejs')
}

module.exports = adminControllers;