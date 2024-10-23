const express = require('express');
const dotenv = require("dotenv").config()

const app = express();
const port = process.env.PORT || 5000;

app.use("/", require("./routes/contactRoutes.js"))


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});