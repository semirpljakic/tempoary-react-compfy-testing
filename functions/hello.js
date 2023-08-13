// domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'semir' },
  { id: 2, name: 'asmir' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,

    body: 'Hello World',
  };
};
