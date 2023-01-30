//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")
const bcrypt = require("bcryptjs")

// for MongoDB database
const User = require("../../models/user")
const userSignup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        //create new user
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        //send error
        res.status(400).json({error})
    }
};
                          

//----------------------------
//  Export controller function
//----------------------------

module.exports = userSignup