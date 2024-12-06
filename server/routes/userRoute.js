const express = require("express");
const { login } = require('../controllers/userController'); 

const router = express.Router();


router.post('/login', login); 
console.log('router login', login)


module.exports = router;