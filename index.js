const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const { connectMongoDB } = require("./Database/db");
const postRouter = require("./ModelsAndControllers/postController");
const userRouter = require("./ModelsAndControllers/userController");

//PORT NO
const PORT = process.env.PORT;

const app = express();
connectMongoDB();

app.use(bodyParser.json());

app.use(cors({ origin:"", credentials: true }));

app.get("/", (req, res) => {
  res.send("Server running successfully!!!");
});

