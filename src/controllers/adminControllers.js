
const path = require("path");


const adminControllers = {
   
    admin: (req,res) => res.sendFile( path.join(__dirname,'../views/admin.html')),
    create: (req,res) => res.sendFile( path.join(__dirname,'../views/create.html')),
    edit: (req,res) => res.sendFile( path.join(__dirname,'../views/edit.html'))
}

module.exports = adminControllers;