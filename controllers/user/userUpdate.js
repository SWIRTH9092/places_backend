//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const User = require("../../models/user")

const userUpdate = async (req, res) => {
    try {
        //  update place
        res.json (
            await User.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userUpdate