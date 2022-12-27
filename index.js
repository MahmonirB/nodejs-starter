const express = require('express');

const api = express();

api.get('/', (req, res) => res.send("Hello world!"));

api.get('/api/courses', (req, res) => res.send([1, 2, 3]));

api.listen(3000, () => console.log("Listening to port 3000 ..."));
