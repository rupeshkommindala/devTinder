const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Rupesh", lastName: "K" });
});

app.listen(3000, () => {
  console.log("Server is successfully running on port 3000");
});
