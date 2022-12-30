const Course = require("./models/course");

async function deleteRecord(id) {
  try {
    return await Course.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message);
  }
}

async function displayRemoved(id) {
  const result = await deleteRecord(id);
  console.log(result);
}

module.exports = deleteRecord;
