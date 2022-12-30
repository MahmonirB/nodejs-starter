const Course = require('./models/course');

async function deleteRecord(id) {
    return await Course.findByIdAndDelete(id);
}

async function displayRemoved(id) {
    const result = await deleteRecord(id);
    console.log(result);
}

module.exports = displayRemoved;
