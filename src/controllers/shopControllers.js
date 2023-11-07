const path = require("path");

const shopControllers = {
   
    shop2:(req,res) => res.render('shop2.ejs'),
   
    cart: (req,res) => res.render('cart.ejs'),

    items: (req,res) => res.render('item.ejs')

    //edit_item: (req,res) => res.sendFile( path.join(__dirname,'../views/item/:id.html')),
}

module.exports = shopControllers;