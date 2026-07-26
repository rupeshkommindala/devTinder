const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the Dashboard!");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the Server!");
});

app.listen(3000, () => {
  console.log("Server is successfully running on port 3000");
});
