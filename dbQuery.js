const Course = require('./db');

async function getQuery() {
  return await Course.find({ author: { $in: ["mosh"] } })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function displayQuery() {
    const result = await getQuery();
    console.log(result);
}

module.exports = displayQuery;
