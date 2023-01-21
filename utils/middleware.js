//----------------------------
//  Import dependencies
//----------------------------
require("dotenv").config()
const express = require('express');
const morgan = require('morgan');  // required for logging
const cors = require('cors');    // required for cors

//  model for place
// const Place = require("./models/place")

//----------------------------
// controller Dependencies
//----------------------------
const GeneralRouter = require("../routers/general");
const PlaceRouter = require("../routers/place");

///----------------------------
//  middleware
//----------------------------
const middleware = (app) => {
    app.use(express.json())
    app.use(morgan("dev"));
    app.use(cors()) ;

  //----------------------------
  //  routes
  //----------------------------

  app.use("/place", PlaceRouter); 
  app.use("/", GeneralRouter);
}  

//----------------------------
// export Middleware Function
//----------------------------

module.exports = middleware;
