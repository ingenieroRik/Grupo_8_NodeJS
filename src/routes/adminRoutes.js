const express = require ("express");

const router = express.Router();

router.get("/home", (req,res) => res.sendFile("./public/index.html"));
router.get("/contact", (req,res) => res.sendFile("./public/contact.html"));
router.get("/about", (req,res) => res.sendFile("./public/about.html"));
router.get("/faqs", (req,res) => res.sendFile("./public/faqs.html"));










module.exports = router;