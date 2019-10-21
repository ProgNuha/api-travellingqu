module.exports = (sequelize, DataTypes) => {
  const m_paketperjalanan = sequelize.define('m_paketperjalanan', {
    idpaketperjalanan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
    },
    idjnspaketperjalanan: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    idlokasiwisata: {
      allowNull: false,
      type: DataTypes.SMALLINT,
    },
    isaktif: {
      allowNull: false,
      defaultValue: 1, 
      type: DataTypes.SMALLINT,
    },
    nmpaketperjalanan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the trip'
      }
    },
    fotopaketperjalanan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please upload a photo'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_paketperjalanan.associate = function(models) {
  };
  return m_paketperjalanan;
};