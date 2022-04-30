const { serialize: V8_serialize, deserialize: V8_deserialize } = require('v8');
const { serialize: BSON_serialize, deserialize: BSON_deserialize } = require('bson');

const { checkSerialize } = require('./serialize-benckmark');


checkSerialize(
  (data, buffer) => Buffer.from(JSON.stringify({ data, buffer })),
  (buffer) => JSON.parse(buffer.toString()),
  9,
  'Buffer binary'
);

checkSerialize(
  (data, buffer) => BSON_serialize({ data, buffer }),
  (buffer) => BSON_deserialize(buffer),
  100,
  'BSON binary'
);

checkSerialize(
  (data, buffer) => V8_serialize({ data, buffer }),
  (buffer) => V8_deserialize(buffer),
  100,
  'V8 binary'
);