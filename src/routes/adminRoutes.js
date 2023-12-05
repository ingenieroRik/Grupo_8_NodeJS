const express = require ("express");
const adminControllers = require("../controllers/adminControllers");


const router = express.Router();


//router.get("/admin",adminControllers.admin);
router.post("/admin",adminControllers.admin);
router.get("/create",adminControllers.create);
router.get("/edit",adminControllers.edit );










module.exports = router;