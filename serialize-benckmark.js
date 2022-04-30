const data = require('./data');

const bytesToMbFunc = (bytes) => (bytes / 1024 / 1024).toFixed(2);

function checkSerialize(serializeFn, deserializeFn, cycleCounts, testName) {
  console.log(`Start testing ${testName} serialize`);
  let date = Date.now();
  let buffer;
  for (let i = 0; i < cycleCounts; i++) {
    buffer = serializeFn(data, buffer);
    deserializeFn(buffer);
  }
  console.log(`Elapsed time: ${Date.now() - date}`);
  console.log(`Buffer size ${bytesToMbFunc(buffer.length)} Mb\n`);
}

module.exports = {
  checkSerialize
}