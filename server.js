const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.end("Hola mundo!")
});


app.listen(PORT, () => {
  console.log(`Iniciado servidor, escuchando peticiones en puerto ${PORT}`);
})