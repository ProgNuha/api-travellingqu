module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_negara', {
      idnegara: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT,
      },
      nmnegara: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isdomestik: {
        allowNull: true,
        type: Sequelize.SMALLINT,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_negara');
  }
};