const express = require ("express");
const path = require('path');
const app = express();
// MUY IMPORTANTE!!!  para usar el metodo POST
app.use(express.urlencoded({ extended: true })); // me volvio loco esto, no mandaba el body

const mainRoutes = require ("./routes/mainRoutes.js");
const shopRoutes = require ("./routes/shopRoutes.js");
const adminRoutes = require ("./routes/adminRoutes.js");

app.use(express.static("public")); // para que lea las carpetas estaticas css etc

app.set('view engine', 'ejs');




//si la ruta por defecto no es /views debemos decirle a node que la carpeta se encuentra
// en otra ruta, para ello usamos:
//app.set('views', __dirname + '/views');

app.set('views', './src/views');


app.use (mainRoutes);
app.use (shopRoutes);
app.use (adminRoutes);


app.listen(4000, ()=> console.log ("servidor corriendo en http://localhost:4000"));