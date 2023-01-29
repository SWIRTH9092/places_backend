//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const User = require("../../models/user")
const userPost = async (req, res) => {
    try {
        //  create user
        res.json (await User.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};
                          

//----------------------------
//  Export controller function
//----------------------------

module.exports = userPost