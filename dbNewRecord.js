const Course = require("./db");

async function saveData() {
  const course = new Course({
    name: "Learning angular",
    author: "mosh",
    category: "book",
    tags: ["frontend"],
  });

  try {
    return await course.save();
  } catch (err) {
    console.log(err._message);
  }
}

async function displayResult() {
  const result = await saveData();
  console.log(result);
}

module.exports = displayResult;
