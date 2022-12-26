const EventEmitter = require('events');
const fs = require('fs');
const Logger = require('./logger');

const logger = new Logger();

logger.on('messageLogger', (arg) => console.log('Listener called', arg));

logger.log('Hiiii');

const files = fs.readdirSync('./');
console.log('files:', files);

fs.readdir('./', (err, files) => { // execute in async way
    if(err) console.log('Error:', err);
    if(files) console.log('files:',files);
});

console.log(__dirname);
console.log(__filename);
