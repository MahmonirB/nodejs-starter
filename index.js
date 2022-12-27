const express = require('express');

const api = express();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

api.get('/', (req, res) => res.send("Hello world!"));

api.get('/api/courses', (req, res) => res.send(courses));

api.get('/api/courses/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course Id is not Found!');
    res.send(course);
});

const port = process.env.PORT || 3000;

api.listen(port, () => console.log(`Listening to port ${port} ...`));
