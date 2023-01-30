require("dotenv").config();
//----------------------------
//  Import dependencies
//----------------------------
//const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {SECRET} = process.env;

// for MongoDB database
const User = require("../../models/user");
const { userInfo } = require("os");

const userLogin = async (req, res) => {
    try {
        const { username, password} = req.body;
        const user = await User.findOne({ username })
        if (user) {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
              const token = await jwt.sign({ username }, SECRET);
              res.status(200).json({ token })
            } else {
                res.status(400).json({error: "PASSWORD DOES NOT MATCH"});
            }
        } else {
            res.status(400).json({error: "USER DOES NOT EXIST"})
        }
    } catch (error) {
        //send error
        res.status(400).json({error})
    }
};
                          

//----------------------------
//  Export controller function
//----------------------------

module.exports = userLogin