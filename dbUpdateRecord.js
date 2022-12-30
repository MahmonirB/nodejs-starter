const Course = require("./models/course");

async function updateRecord(id) {
  const course = await Course.findById(id);

  if (!course) return;

  course.author = "Mahi joon";

  return await course.save();
}

async function updateRecordDirectly(id, data) {
  try {
    const result = await Course.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function updateRecordDirectlyWithRes(id, data) {
  try {
    const result = await Course.findByIdAndUpdate(id, { $set: data }, { new: 1 });
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function displayUpdated(id) {
  const result = await updateRecordDirectlyWithRes(id);
  console.log(result);
}

module.exports = updateRecordDirectlyWithRes;
