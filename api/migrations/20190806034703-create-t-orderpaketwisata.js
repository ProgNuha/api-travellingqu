module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('t_orderpaketwisata', {
      idorderpaketwisata: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      iduserpengguna: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idpaketperjalanandetail: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idmetodebayar: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      tglorder: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      tglmulaiwisata: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tglakhirwisata: {
        allowNull: false,
        type: Sequelize.DATE
      },
      jmlpax: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      totalbiayawisata: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      ispayment: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      tglpayment: {
        allowNull: true,
        type: Sequelize.DATE
      },
      iscancel: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      tglcancel: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('t_orderpaketwisata');
  }
};