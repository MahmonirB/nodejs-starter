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

// async function saveData() {
// const course = new Course({
//     name: 'Learning angular',
//     author: 'mosh',
//     tags: ['frontend', 'angular']
// });

// const result = await course.save();
// console.log(result)
// }

// saveData();

async function getQuery() {
    const result = await Course.find({ author: { $in: ['mosh'] }})
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });

    console.log(result);

}
getQuery();
