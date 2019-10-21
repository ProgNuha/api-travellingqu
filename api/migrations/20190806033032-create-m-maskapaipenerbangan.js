module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_maskapaipenerbangan', {
      idmaskapaipenerbangan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      nmmaskapaipenerbangan: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_maskapaipenerbangan');
  }
};