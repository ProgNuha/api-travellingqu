module.exports = (sequelize, DataTypes) => {
  const m_klpperjalanan = sequelize.define('m_klpperjalanan', {
    idklpperjalanan: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmklpperjalanan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the name of trip group'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_klpperjalanan.associate = function(models) {
  };
  return m_klpperjalanan;
};