const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())

const mainRouter = require("./routes/index");


const jwt = require('jsonwebtoken');

console.log("this is working")

app.use('/api/v1', mainRouter)


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));