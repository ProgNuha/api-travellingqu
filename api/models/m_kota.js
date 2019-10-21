module.exports = (sequelize, DataTypes) => {
  const m_kota = sequelize.define('m_kota', {
    idkota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nmkota: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9.\-_ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter city`s name'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_kota.associate = function(models) {
  };
  return m_kota;
};