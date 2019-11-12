// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://app:password@postgres/db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://app:password@postgres-test/db-test'
  }
};
