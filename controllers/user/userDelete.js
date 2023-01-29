//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const User = require("../../models/user")

const userDelete = async (req, res) => {
    try {
        // send user to delete
        res.json(await User.findByIdAndRemove(req.params.id))
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userDelete