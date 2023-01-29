//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const User = require("../../models/user")

const userShow = async (req, res) => {
    try {
        res.json(await User.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userShow