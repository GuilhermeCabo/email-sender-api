const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const EmailSender = require("./emailSender");

const app = express();

const port = 3333;

app.use(bodyParser.json());
app.use(cors());

app.post("/email/messages", (req, res) => EmailSender.send(req, res));

app.listen(port, console.log(`Server is online on port ${port}`));
