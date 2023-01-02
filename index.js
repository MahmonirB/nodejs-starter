const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const pug = require("pug");
const debug = require("debug")("app:startup"); // export DEBUG=app:startup,app:db or DEBUG=app:startup or DEBUG=app:*
// const dbDebugger = require('debug')('app:db');
const logger = require("./middleware/logger");
const config = require("config");
const dbPagination = require("./dbPagination");
const dbUpdate = require("./dbUpdateRecord");
const dbNewRecord = require("./dbNewRecord");
const errorHandling = require("./middleware/errorHandling");
const app = express();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging')();

const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "./views");

if (app.get("env") === "development") {
  // export ENV_NODE=production to test this block
  debug("Morgen enabled...");
  app.use(morgan("tiny"));
}

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwt key not found!"); // export jwtPrivateKey=xxx and unset jwtPrivateKey=xxx
  return process.exit(1);
}

app.use(helmet());
app.use(errorHandling);

app.use(logger); // custom middleware function

app.listen(port, () => console.log(`Listening to port ${port} ...`));
