//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const WorldPlace = require("../../models/worldplace")

const placeDelete = async (req, res) => {
    try {
        // send place to delete
        res.json(await WorldPlace.findByIdAndRemove(req.params.id))
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// const placeDelete = (req, res) => {
//     res.send("Delete place controller (delete)")
// };

//----------------------------
//  Export controller function
//----------------------------

module.exports = placeDelete