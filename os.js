const os = require('os');

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(`Total memeory: ${totalMem}`);
console.log(`Free memeory: ${freeMem}`);
