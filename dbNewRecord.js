const Course = require("./db");

async function saveData() {
  const course = new Course({
    name: "Learning angular",
    author: "mosh",
    category: "-",
    tags: [],
  });

  try {
    return await course.save();
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
  }
}

async function displayResult() {
  const result = await saveData();
  console.log(result);
}

module.exports = displayResult;
