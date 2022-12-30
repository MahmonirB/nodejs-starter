const Course = require("./db");

async function saveData() {
  const course = new Course({
    name: "Learning angular",
    author: "mosh",
    category: "book",
    tags: ['backend'],
  });

  return await course.save();
}

async function displayResult() {
  try {
    const result = await saveData();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = displayResult;
