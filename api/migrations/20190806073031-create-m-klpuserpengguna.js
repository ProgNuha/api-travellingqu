module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_klpuserpengguna', {
      idklpuserpengguna: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT,
      },
      nmklpuserpengguna: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      inisialklpuserpengguna: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_klpuserpengguna');
  }
};