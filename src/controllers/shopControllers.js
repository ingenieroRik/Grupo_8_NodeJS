const path = require("path");

const shopControllers = {
   
    shop2:(req,res) => res.sendFile( path.join(__dirname,'../views/shop2.html')),
   
    cart: (req,res) => res.sendFile( path.join(__dirname,'../views/cart.html')),

    items: (req,res) => res.sendFile( path.join(__dirname,'../views/item.html'))

    //edit_item: (req,res) => res.sendFile( path.join(__dirname,'../views/item/:id.html')),
}

module.exports = shopControllers;