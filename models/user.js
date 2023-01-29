//-------------------------------------------
// Import Dependencies
//-------------------------------------------

const mongoose = require("./connection")

//-------------------------------------------
// Define WorldPlace Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String }

});

// make WorldPlace model
const User = model("User", UserSchema);

//-------------------------------------------
// Export Place Model
//-------------------------------------------
module.exports = User
