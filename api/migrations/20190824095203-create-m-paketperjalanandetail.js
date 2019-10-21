module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_paketperjalanandetail', {
      idpaketperjalanandetail: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idpaketperjalanan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idmaskapaipenerbanganbrngkt: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      idmaskapaipenerbanganpulang: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      nmpaketperjalanandetail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      durasi: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      minimumpax: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      hargaperpax: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_paketperjalanandetail');
  }
};