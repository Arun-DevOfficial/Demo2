const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDB = async () => {
  try {
    const URI = "mongodb+srv://Arunkumar:Arun123@atlas.6wkyg.mongodb.net/suba";
    console.log(`Connecting Mongo DB at ${URI}`);
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting with MongoDB", error);
  }
};
module.exports = { connectMongoDB };
