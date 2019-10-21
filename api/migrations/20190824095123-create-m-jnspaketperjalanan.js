module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_jnspaketperjalanan', {
      idjnspaketperjalanan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      nmjnspaketperjalanan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idklpperjalanan: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_jnspaketperjalanan');
  }
};