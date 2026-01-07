const express = require("express");
const app = express();
app.use("/hello", (req, res) => {
  res.send("Hello World!!");
});
app.use("/test", (req, res) => {
  res.send("Hello Hello Hello!!");
});
app.use("/", (req, res) => {
  res.send("Hello from Dashboard");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
