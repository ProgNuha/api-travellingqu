module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_maskapaipenerbangan', [
      {nmmaskapaipenerbangan: 'Garuda Indonesia'},
      {nmmaskapaipenerbangan: 'Lion Air'},
      {nmmaskapaipenerbangan: 'Saudi Arabian Airlines'},
      {nmmaskapaipenerbangan: 'Oman Air'}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_maskapaipenerbangan',null,{})
  }
};
