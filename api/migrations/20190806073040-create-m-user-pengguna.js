'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_user_pengguna', {
      iduserpengguna: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idklpuserpengguna: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      nmuserpengguna: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
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
      nohp: {
        allowNull: true,
        type: Sequelize.STRING
      },
      passwd: {
        allowNull: true,
        type: Sequelize.STRING
      },
      lastlogin: {
        allowNull: true,
        type: Sequelize.DATE
      },
      isaktif: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_user_pengguna');
  }
};