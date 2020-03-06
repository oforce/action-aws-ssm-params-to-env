const core = require('@actions/core');
const { getParameters } = require('./ssm');

async function run() {
  const params = core.getInput('params', { required: true });
  const values = await getParameters(JSON.parse(params));
  values.forEach(setEnvironmentVariable);
}

function setEnvironmentVariable({ variable, value }) {
  core.exportVariable(variable, value);
}

module.exports = { run };

run();
