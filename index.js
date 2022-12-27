const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => res.send("Hello world!"));

app.get('/api/courses', (req, res) => res.send(courses));

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course Id is not Found!');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) res.status(400).send('Input is not valid!');

    courses.push({ id: courses.length + 1, name: req.body.name });
    res.send(courses);
});

app.listen(port, () => console.log(`Listening to port ${port} ...`));
