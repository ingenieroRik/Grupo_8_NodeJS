const express = require ("express");
const path = require('path');
const app = express();

const mainRoutes = require ("./src/routes/mainRoutes");
const shopRoutes = require ("./src/routes/shopRoutes.js");
const adminRoutes = require ("./src/routes/adminRoutes.js");

app.use(express.static("public"));


app.use ("/", mainRoutes);
app.use ("/shop2", shopRoutes);
app.use ("/admin", adminRoutes);

app.listen(4000, ()=> console.log ("servidor corriendo en http://localhost:4000"));