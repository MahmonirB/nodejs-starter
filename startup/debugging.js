const helmet = require("helmet");
const morgan = require("morgan");
const pug = require("pug");
const errorHandling = require("../middleware/errorHandling");
const debug = require("debug")("app:startup"); // export DEBUG=app:startup,app:db or DEBUG=app:startup or DEBUG=app:*
// const dbDebugger = require('debug')('app:db');

module.exports = function (app) {
  app.set("view engine", "pug");
  app.set("views", "./views");

  if (app.get("env") === "development") {
    // export ENV_NODE=production to test this block
    debug("Morgen enabled...");
    app.use(morgan("tiny"));
  }

  app.use(helmet());
  app.use(errorHandling);
};
