//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const WorldPlace = require("../../models/worldplace")

const placeShow = async (req, res) => {
    try {
        res.json(await WorldPlace.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = placeShow