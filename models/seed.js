require('dotenv').config()
const mongoose = require('./connection')
const WorldPlace = require('./worldplace')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingWorldPlace =  [
        { title: "Tahquamenon Falls - Michigan",
          category: "Falls",  
          image: "https://www.istockphoto.com/photo/tahquamenon-falls-gm586196098-100625025"  },
        { title: "Crisp Point Lighthouse - Michgian",
          category: "Lighthouse",
          image: "https://media.istockphoto.com/id/588382034/photo/sunset-at-the-crisp-point-lighthouse.jpg?s=612x612&w=0&k=20&c=YWEeS3QwIpgm6U4kRHG1D-LaKimMQ7ab9ByLCyyqp6I="  },
      ]
            
        // for first time if no data...
            // Create new Place Item once old Place Items are deleted
            // Place.create(startingPlace, (err, data) =>{
            //     mongoose.connection.close();
            // }) 
  
      // Delete all Place Items
      WorldPlace.deleteMany({}, (err, data) => {
        // Create new Place Item once old Place Items are deleted
        WorldPlace.create(startingWorldPlace, (err, data) =>{
            mongoose.connection.close();
        })
    })    
})
