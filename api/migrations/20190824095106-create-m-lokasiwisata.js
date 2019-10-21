module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_lokasiwisata', {
      idlokasiwisata: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idkategoriwisata: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      idkota: {
        allowNull: false,
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
      nmlokasiwisata: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_lokasiwisata');
  }
};