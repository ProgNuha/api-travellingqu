'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_agentravel', {
      idagentravel: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inisialagentravel: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      nmagentravel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fotoagentravel: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_agentravel');
  }
};