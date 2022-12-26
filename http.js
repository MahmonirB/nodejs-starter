const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify({a: 'hello', b: 'world'}));
        res.end();
    }
});

server.listen(3000);
console.log('Listening to server 3000...');
