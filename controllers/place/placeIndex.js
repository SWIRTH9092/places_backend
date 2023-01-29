//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const WorldPlace = require("../../models/worldplace")

const placeIndex = async (req, res) => {
    try {
        // send all places
        res.json(await WorldPlace.find({}));
    }  catch (error) {
        //send error
        res.status(400).json(error);
    }
};


//----------------------------
//  Export controller function
//----------------------------

module.exports = placeIndex