module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_fotodetaillokasi', {
      idfotolokasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idtripwisataperhari: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fotolokasi: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_fotodetaillokasi');
  }
};