const Course = require("./db");

async function paginationQuery() {
    const pageSize = 2;
    const pageNumber = 2;

    return await Course.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
}

async function displayPagination() {
    const pagination = await paginationQuery();
    console.log(pagination);
}

module.exports = displayPagination;
