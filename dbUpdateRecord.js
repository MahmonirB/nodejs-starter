const Course = require('./db');

async function updateRecord(id) {
    const course = await Course.findById(id);

    course.author = "Mahi joon";

    return await course.save();

}

async function displayUpdated(id) {
    const result = await updateRecord(id);
    console.log(result);
}

module.exports = displayUpdated;
