require('dotenv').config()
const express = require("express");
const app = express();
const { urlencoded } = require("express");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const port = 4004;

// Body parser
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}));

// Middlewares
app.use('/', router);
app.use(errorHandler.error);

app.listen(port, () => {
  console.log('App running on port ', port);
});
