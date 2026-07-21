const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Rupesh", lastName: "Kommindala" });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from the Test!");
});

app.listen(3000, () => {
  console.log("Server is successfully running on port 3000");
});
