const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

const mainRouter = require("./routes/index");

const app = express();
const jwt = require('jsonwebtoken');


app.use('/api/v1', mainRouter)

app.listen(3000);