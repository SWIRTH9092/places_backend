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
const WorldPlaceSchema = new Schema({
    title: { type: String },
    category: { type: String },
    image: { type: String },
    address: { type: String },
    location: {
        lat: { type: String },
        lng: { type: String },
    },
    visited: { type: Boolean },
    wishVisitDate: { type: Date },
    vistiedDate: { type: Date },
    username: { type: String }

});

// make WorldPlace model
const WorldPlace = model("WorldPlace", WorldPlaceSchema);

//-------------------------------------------
// Export Place Model
//-------------------------------------------
module.exports = WorldPlace
