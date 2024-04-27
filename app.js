const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const router = require("./routes/user-routes");

mongoose
  .connect(
    "mongodb+srv://alvinabiero:lyabi4321moraa@cluster0.unrg7iw.mongodb.net/Blog?retryWrites=true&w=majority&appName=Blog"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use(bodyParser.json());

app.use("/api/user", router);

app.use("/api", (req, res, next) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
