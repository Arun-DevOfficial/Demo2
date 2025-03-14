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

app.use(
  cors({ origin: "https://fronendfinal.netlify.app", credentials: true })
);

app.get("/", (req, res) => {
  res.send("Server running successfully!!!");
});

//App Routes
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log(`Server Running Successfully at 3000`);
});
