const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log("Connected"))
.catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default:  Date.now },
});

const Course = mongoose.model('Course', courseSchema);

async function saveData() {
const course = new Course({
    name: 'Learning mongo',
    author: 'mahmonir',
    tags: ['mongobd', 'mongoose']
});

const result = await course.save();
console.log(result)
}

saveData();