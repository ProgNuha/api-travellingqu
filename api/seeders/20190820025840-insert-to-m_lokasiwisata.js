module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_lokasiwisata', [
      {
        nmlokasiwisata: 'Gunung Papandayan',
        idkategoriwisata: 1,
        idkota: 23,
        idpropinsi: 3,
        idnegara: 64,
      },
      {
        nmlokasiwisata: 'Malioboro',
        idkategoriwisata: 3,
        idkota: 69,
        idpropinsi: 5,
        idnegara: 64,
      },
      {
        nmlokasiwisata: 'Pantai Parangtritis',
        idkategoriwisata: 2,
        idkota: 69,
        idpropinsi: 5,
        idnegara: 64,
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_lokasiwisata',null,{})
  }
};
