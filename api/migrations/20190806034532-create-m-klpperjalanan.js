module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_klpperjalanan', {
      idklpperjalanan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      nmklpuserpengguna: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_klpperjalanan');
  }
};