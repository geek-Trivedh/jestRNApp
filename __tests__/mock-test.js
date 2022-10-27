import Users from '../src/screens/Users';

it('Api test case', async () => {
  global.fetch = jest.fn().mockImplementation(() => {
    let p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {id: 1};
        },
      });
    });

    return p;
  });
  const response = await Users.all();
  expect(response.id).toBe(1);
});
