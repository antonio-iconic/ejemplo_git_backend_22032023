const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
  path: ".env"
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.end("Hola mundo!")
});


app.listen(PORT, () => {
  console.log(`Iniciado servidor, escuchando peticiones en puerto ${PORT}`);
})
