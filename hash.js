const bcrypt = require('bcrypt');

async function getHashedValue(data) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(data, salt);
}

module.exports = getHashedValue;
