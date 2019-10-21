'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_agentraveldetail', {
      idagentraveldetail: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idagentravel: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idpaketperjalanan: {
        allowNull: false,
        type: Sequelize.STRING
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_agentraveldetail');
  }
};