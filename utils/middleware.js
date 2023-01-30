//----------------------------
//  Import dependencies
//----------------------------
require("dotenv").config()
const express = require('express');
const bcrpyt = require("bcryptjs")
const morgan = require('morgan');  // required for logging
const cors = require('cors');    // required for cors

//  model for place
// const Place = require("./models/place")

//----------------------------
// controller Dependencies
//----------------------------
const GeneralRouter = require("../routers/general");
const PlaceRouter = require("../routers/place");
const UserRouter = require("../routers/user")

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
  app.use("/user", UserRouter)
  app.use("/", GeneralRouter);
}  

//----------------------------
// export Middleware Function
//----------------------------

module.exports = middleware;
