module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_klpuserpengelola', {
      idklpuserpengelola: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT,
      },
      nmklpuserpengelola: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      inisialuserpengelola: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_klpuserpengelola');
  }
};