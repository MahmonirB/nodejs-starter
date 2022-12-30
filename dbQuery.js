const Course = require('./models/course');

async function getDataQuery({ select, id }) {
  try {
    const result = await Course.find({ _id: id }).select(select);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

async function getQuery() {
  return await Course.find({ author: { $in: ["mosh"] }, name: /.*angular.*/i })
    .or([{ tags: "backend" }, { tags: "frontend" }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, author: 1, tags: 1 });
}

async function displayQuery() {
  const result = await getQuery();
  console.log(result);
}

module.exports = getDataQuery;
