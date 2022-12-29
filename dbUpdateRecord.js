const Course = require('./db');

async function updateRecord(id) {
    const course = await Course.findById(id);

    if(!course) return;

    course.author = "Mahi joon";

    return await course.save();

}

async function updateRecordDirectly(id) {
    return await Course.update({ _id: id }, {
        $set: {
            author: 'Mahak'
        }
    });
}

async function updateRecordDirectlyWithRes(id) {
    return await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Mahmonir khanum'
        }
    }, { new: 1 });
}

async function displayUpdated(id) {
    const result = await updateRecordDirectlyWithRes(id);
    console.log(result);
}

module.exports = displayUpdated;
