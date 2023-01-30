//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const userSignup = require ("../controllers/user/userSignup")
const userLogin = require("../controllers/user/userLogin")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
//**  note place is no longer specified in the router - 
//    if place was listed here, you would get a 404 - not found
router.post('/signup', userSignup);  // Create New login
router.post('/login', userLogin); //Sign on
//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;