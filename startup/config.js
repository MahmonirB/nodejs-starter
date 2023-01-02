const config = require("config");

module.exports = function() {
    if (!config.get("jwtPrivateKey")) {
        throw new Error("FATAL ERROR: jwt key not found!"); // export jwtPrivateKey=xxx and unset jwtPrivateKey=xxx
        return process.exit(1);
      }      
}
