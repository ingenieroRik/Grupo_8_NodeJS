

const mainControllers = {
        home: (req,res) => res.send("./public/index.html"),
        contact: (req,res) => res.send("./public/views/contact.html"),
        about: (req,res) => res.send("./public/views/about.html"),
        faqs: (req,res) => res.send("./public/views/faqs.html"),
}

module.exports = mainControllers;