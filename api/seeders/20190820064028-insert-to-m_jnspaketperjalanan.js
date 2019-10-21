module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_jnspaketperjalanan', [
      {
        nmjnspaketperjalanan: 'Domestik',
        idklpperjalanan: 1
      },
      {
        nmjnspaketperjalanan: 'Internasional',
        idklpperjalanan: 1
      },
      {
        nmjnspaketperjalanan: 'Religi',
        idklpperjalanan: 2
      },
      {
        nmjnspaketperjalanan: 'Haji',
        idklpperjalanan: 3
      },
      {
        nmjnspaketperjalanan: 'Umroh',
        idklpperjalanan: 4
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_jnspaketperjalanan',null,{})
  }
};
