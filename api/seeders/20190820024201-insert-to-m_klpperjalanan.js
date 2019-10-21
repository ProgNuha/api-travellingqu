module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_klpperjalanan', [
      {nmklpperjalanan: 'Umum'},
      {nmklpperjalanan: 'Wisata Religi'},
      {nmklpperjalanan: 'Haji'},
      {nmklpperjalanan: 'Umroh'}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_klpperjalanan',null,{})
  }
};
