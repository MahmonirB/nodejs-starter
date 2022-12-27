const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./logger');
const validate = require('./validate');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // built-in middleware func
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('dev'));

app.use(logger); // custom middleware function

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => res.send("Hello world!"));

app.get('/api/courses', (req, res) => res.send(courses));

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course Id is not Found!');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.message);

    courses.push({ id: courses.length + 1, name: req.body.name });
    res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course Id is not Found!');

    const { error } = validate(req.body);
     if (error) res.status(400).send(error.message);
 
     course.name = req.body.name;
     res.send(courses);
 });

 app.delete('/api/courses/:id', (req, res) => {
    const index = courses.findIndex(el => el.id === parseInt(req.params.id));
    if (index < 0) return res.status(404).send('Course Id is not Found!');

    courses.splice(index, 1);
    
    res.send(courses);
});

app.listen(port, () => console.log(`Listening to port ${port} ...`));
