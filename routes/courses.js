const express = require('express');
const validate = require('../validate');
const getData = require('../dbQuery');
const addData = require('../dbNewRecord');
const updateRecord = require('../dbUpdateRecord');
const router = express.Router();


router.get('/', async (req, res) => {
    const courses = await getData({ name: 1, tags: 1 });

    if (!course) return res.status(404).send('Any courses are not Found!');

    res.send(courses);
});

router.get('/:id', async (req, res) => {
    const course = await getData({ select: { name: 1, tags: 1 }, id: req.params.id });

    if (!course) return res.status(404).send('Any courses are not Found!');

    res.send(course);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.message);

    const result = await addData(req.body);
    res.send(result);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) res.status(400).send(error.message);

    const courses = await updateRecord(req.params.id, req.body);

    if (!courses) return res.status(404).send('Course Id is not Found!');

     res.send(courses);
 });

//  router.delete('/:id', (req, res) => {
//     const index = courses.findIndex(el => el.id === parseInt(req.params.id));
//     if (index < 0) return res.status(404).send('Course Id is not Found!');

//     courses.splice(index, 1);
    
//     res.send(courses);
// });

module.exports = router;
