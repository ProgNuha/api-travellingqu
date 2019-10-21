module.exports = (sequelize, DataTypes) => {
  const m_lokasiwisata = sequelize.define('m_lokasiwisata', {
    idlokasiwisata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idkategoriwisata: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    idkota: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nmlokasiwisata: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter location'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_lokasiwisata.associate = function(models) {
  };
  return m_lokasiwisata;
};