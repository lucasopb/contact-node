const express = require('express');
const errorHandler = require('./middleware/errorhandler.js');
const dotenv = require("dotenv").config()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/", require("./routes/contactRoutes.js"))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});