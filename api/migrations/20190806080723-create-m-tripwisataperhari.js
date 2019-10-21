module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_tripwisataperhari', {
      idtripwisataperhari: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idpaketperjalanandetail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      harike: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      idkota: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      idpropinsi: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      idnegara: {
        allowNull: true,
        type: Sequelize.SMALLINT
      },
      idhotel: {
        allowNull: true,
        type: Sequelize.STRING
      },
      idlokasiwisata: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fotolokasiwisata: {
        allowNull: true,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_tripwisataperhari');
  }
};