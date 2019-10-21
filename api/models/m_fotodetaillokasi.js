module.exports = (sequelize, DataTypes) => {
  const m_fotodetaillokasi = sequelize.define('m_fotodetaillokasi', {
    idfotolokasi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idtripwisataperhari: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fotolokasi: {
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
  m_fotodetaillokasi.associate = function(models) {
  };
  return m_fotodetaillokasi;
};