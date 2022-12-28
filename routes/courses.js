const express = require('express');
const router = express.Router();


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

router.get('/', (req, res) => res.send(courses));

router.get('/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course Id is not Found!');
    res.send(course);
});

router.post('/', (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.message);

    courses.push({ id: courses.length + 1, name: req.body.name });
    res.send(courses);
});

router.put('/:id', (req, res) => {
    const course = courses.find(el => el.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course Id is not Found!');

    const { error } = validate(req.body);
     if (error) res.status(400).send(error.message);
 
     course.name = req.body.name;
     res.send(courses);
 });

 router.delete('/:id', (req, res) => {
    const index = courses.findIndex(el => el.id === parseInt(req.params.id));
    if (index < 0) return res.status(404).send('Course Id is not Found!');

    courses.splice(index, 1);
    
    res.send(courses);
});

module.exports = router;
