// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

//*** */  START WITH :   /users  ****/

/*** GET LOGIN ***/ 
router.get('/login', usersController.login);  

/*** GET REGISTER ***/ 
router.get('/register', usersController.register);  

module.exports = router;