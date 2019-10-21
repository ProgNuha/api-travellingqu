module.exports = (sequelize, DataTypes) => {
  const m_metodebayar = sequelize.define('m_metodebayar', {
    idmetodebayar: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmmetodebayar: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter payment method'
      }
    },
    isaktif: {
      type: DataTypes.SMALLINT,
      defaultValue: 1,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_metodebayar.associate = function(models) {
  };
  return m_metodebayar;
};