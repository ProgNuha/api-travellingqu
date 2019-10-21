const model = require('../models');
const { m_paketperjalanandetail } = model;

module.exports = (sequelize, DataTypes) => {
  const m_tripwisataperhari = sequelize.define('m_tripwisataperhari', {
    idtripwisataperhari: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idpaketperjalanandetail: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
      allowNull: false
    },
    harike: { // !add function to durasi paketperjalanandetail
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    idkota: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    idhotel: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
      allowNull: true
    },
    idlokasiwisata: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fotolokasiwisata: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: true,
        msg: 'Please upload photo'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_tripwisataperhari.associate = function(models) {
  };
  return m_tripwisataperhari;
};