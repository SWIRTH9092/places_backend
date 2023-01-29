//-------------------------------------------
// Import Dependencies
//-------------------------------------------

const mongoose = require("./connection")

//-------------------------------------------
// Define User Model
//-------------------------------------------
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make user schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String }

}, {timestamps: true});

// make User model
const User = model("User", userSchema);

//-------------------------------------------
// Export Place Model
//-------------------------------------------
module.exports = User
