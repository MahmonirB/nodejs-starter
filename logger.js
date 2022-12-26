const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(name) {
        console.log('name'+name);
        this.emit('messageLogger',{id:1, message: 'logged messages'});
    }
}

module.exports = Logger;
