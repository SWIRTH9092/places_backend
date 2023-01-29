//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const User = require("../../models/user")

const userIndex = async (req, res) => {
    try {
        // send all users
        res.json(await User.find({}));
    }  catch (error) {
        //send error
        res.status(400).json(error);
    }
};


//----------------------------
//  Export controller function
//----------------------------

module.exports = userIndex