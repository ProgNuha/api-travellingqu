module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('m_metodebayar', {
        idmetodebayar: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.SMALLINT
        },
        nmmetodebayar: {
          allowNull: false,
          type: Sequelize.STRING
        },
        isaktif: {
          allowNull: false,
          type: Sequelize.SMALLINT
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_metodebayar');
  }
};