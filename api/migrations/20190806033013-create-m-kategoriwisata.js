module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_kategoriwisata', {
      idkategoriwisata: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      nmkategoriwisata: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_kategoriwisata');
  }
};