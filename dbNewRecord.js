const Course = require('./models/course');

async function addData(data) {
  const course = new Course(data);

  try {
    const result = await course.save();
    return result;
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
  }
}

async function displayResult() {
  const result = await saveData();
  console.log(result);
}

module.exports = addData;
