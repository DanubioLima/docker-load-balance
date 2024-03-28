const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(`Request recebida`);
  res.send(`Hello World! Eu sou um servidor feito com Javascript!`);
});

app.listen(5050, () => {
  console.log("Listening...");
});
