module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_lokasiwisata', {
      idpaketperjalanan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idjnspaketperjalanan: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      idlokasiwisata: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      isaktif: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      nmpaketperjalanan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fotopaketperjalanan: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_lokasiwisata');
  }
};