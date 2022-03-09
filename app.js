const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/hello", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/plantain", function (req, res) {
  res.sendFile(path.join(__dirname, "/plantain.html"));
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
