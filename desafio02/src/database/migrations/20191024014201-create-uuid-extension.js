module.exports = {
  up: queryInterface => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
  },
};
