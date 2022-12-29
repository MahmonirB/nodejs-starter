const Course = require('./db');

async function saveData() {
  const course = new Course({
    name: "Learning angular",
    author: "mosh",
    tags: ["frontend", "angular"],
  });

  return await course.save();
}

async function displayResult() {
  const result = await saveData();
  console.log(result);
}

module.exports = displayResult;
