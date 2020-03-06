const { getParameters } = require('./ssm');

it('should work', async () => {
  const params = `[
        {"path":"/prod/sqs/contractors_contracted", "variable":"OF_TEST"}
    ]`;
  const values = await getParameters(params);
  expect(values[0].variable).toEqual('OF_TEST');
  expect(values[0].value).not.toBeNull();
});
