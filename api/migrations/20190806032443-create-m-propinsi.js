module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_propinsi', {
      idpropinsi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idnegara: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      nmpropinsi: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_propinsi');
  }
};