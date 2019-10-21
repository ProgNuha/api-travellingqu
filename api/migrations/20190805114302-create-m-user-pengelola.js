module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_user_pengelola', {
      iduserpengelola: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      idklpuserpengelola: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      nmuserpengelola: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      passwd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nohp: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lastlogin: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      isaktif: {
        allowNull: false,
        type: Sequelize.SMALLINT,
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
    return queryInterface.dropTable('m_user_pengelola');
  }
};