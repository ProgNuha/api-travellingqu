module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('m_paketperjalanan', [
      {
        idpaketperjalanan: "ygy1",
        idjnspaketperjalanan: 1,
        idlokasiwisata: 2,
        isaktif: 1,
        nmpaketperjalanan: "Paket Wisata Yogya Tour",
        fotopaketperjalanan: "",
      },
      {
        idpaketperjalanan: "pprt1",
        idjnspaketperjalanan: 1,
        idlokasiwisata: 3,
        isaktif: 1,
        nmpaketperjalanan: "Paket Wisata Pantai Parangtritis",
        fotopaketperjalanan: "",
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('m_paketperjalanan',null,{})
  }
};
