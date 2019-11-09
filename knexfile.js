// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/interview'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-interview'
  }
};
