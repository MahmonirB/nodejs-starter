require("express-async-errors");
const winston = require("winston");
const winstonDB = require("winston-mongodb");

module.exports = function() {
winston.add(
    new winston.transports.File({
      filename: "uncaughtException.log",
      level: "error",
      handleExceptions: true,
      handleRejections: true,
    })
  );
  winston.add(new winston.transports.File({ filename: "logFile.log", level: "error" }));
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/playground",
      level: "error",
      options: { useUnifiedTopology: true },
    })
  );
  
}