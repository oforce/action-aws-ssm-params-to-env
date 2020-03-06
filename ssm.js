const aws = require('aws-sdk');

const ssm = new aws.SSM();

function getParameters(params) {
  const promises = JSON.parse(params).map(getParameter);
  return Promise.all(promises);
}

async function getParameter({ path, variable }) {
  const { Parameter } = await ssm.getParameter({ Name: path }).promise();
  return { variable, value: Parameter.Value };
}

module.exports = { getParameters };
