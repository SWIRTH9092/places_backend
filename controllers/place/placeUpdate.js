//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const WorldPlace = require("../../models/worldplace")

const placeUpdate = async (req, res) => {
    try {
        //  update place
        res.json (
            await WorldPlace.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};


//----------------------------
//  Export controller function
//----------------------------

module.exports = placeUpdate