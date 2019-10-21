module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_hotel', {
      idhotel: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50)
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
      nmhotel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bintang: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      notelp: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nmpic: {
        allowNull: true,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_hotel');
  }
};