//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const userIndex = require ("../controllers/user/userIndex")
const userPost = require("../controllers/user/userPost")
const userUpdate = require("../controllers/user/userUpdate")
const userDelete = require("../controllers/user/userDelete")
const userShow = require("../controllers/user/userShow")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
//**  note place is no longer specified in the router - 
//    if place was listed here, you would get a 404 - not found
router.get('/', userIndex);  // get all 
router.post('/', userPost);  // Create New 
router.put('/:id', userUpdate); //Update Existing
router.delete('/:id', userDelete)  // delete Existing
router.get('/:id', userShow)  // Show a specific item

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;