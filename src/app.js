const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Rupesh", lastName: "K" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to DB");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.get("/user/:userId/:name", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Rupesh", lastName: "Kommindala" });
});

app.listen(3000, () => {
  console.log("Server is successfully running on port 3000");
});
