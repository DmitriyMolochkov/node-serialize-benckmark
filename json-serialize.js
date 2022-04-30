const { serialize: V8_serialize, deserialize: V8_deserialize } = require('v8');
const { serialize: BSON_serialize, deserialize: BSON_deserialize } = require('bson');

const { checkSerialize } = require('./serialize-benckmark');

checkSerialize(
  (data, buffer) => Buffer.from(JSON.stringify(data)),
  (buffer) => JSON.parse(buffer.toString()),
  10000,
  'Buffer'
);

checkSerialize(
  (data, buffer) => BSON_serialize((data)),
  (buffer) => BSON_deserialize(buffer),
  10000,
  'BSON'
);

checkSerialize(
  (data, buffer) => V8_serialize((data)),
  (buffer) => V8_deserialize(buffer),
  10000,
  'V8'
);