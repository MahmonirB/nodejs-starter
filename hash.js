const bcrypt = require('bcrypt');

async function getHashedValue(data) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(data, salt);
}

async function compareCredential(oldData, newData) {
    return bcrypt.compare(oldData, newData);
}

module.exports.getHashedValue = getHashedValue;
module.exports.compareCredential = compareCredential;
