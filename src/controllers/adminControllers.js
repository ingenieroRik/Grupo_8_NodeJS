
const path = require("path");


const adminControllers = {
   
    admin: (req,res) => res.render('admin.ejs'),
    create: (req,res) => res.render( 'create.ejs'),
    edit: (req,res) => res.render( 'edit.ejs')
}

module.exports = adminControllers;