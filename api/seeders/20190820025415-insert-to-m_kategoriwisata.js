module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_kategoriwisata', [
      {nmkategoriwisata: 'Wisata Alam - Gunung'},
      {nmkategoriwisata: 'Wisata Alam - Pantai'},
      {nmkategoriwisata: 'Wisata Belanja'},
      {nmkategoriwisata: 'Wisata Umum'}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_kategoriwisata',null,{})
  }
};
