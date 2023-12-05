const express = require ("express");
const router = express.Router();

const mainControllers = require ("../controllers/mainController.js");

router.get("/", mainControllers.home);
router.get("/contact", mainControllers.contact);
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);








module.exports = router;