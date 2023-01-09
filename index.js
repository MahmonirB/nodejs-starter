const express = require("express");
const winston = require("winston");
const app = express();
require('./startup/routers')(app);
require('./startup/config')(app);
require('./startup/db')();
require('./startup/logging')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening to port ${port} ...`));
