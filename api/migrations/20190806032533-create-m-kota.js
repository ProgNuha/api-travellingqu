module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_kota', {
      idkota: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idpropinsi: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idnegara: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      nmkota: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_kota');
  }
};