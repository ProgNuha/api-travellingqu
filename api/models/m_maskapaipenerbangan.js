module.exports = (sequelize, DataTypes) => {
  const m_maskapaipenerbangan = sequelize.define('m_maskapaipenerbangan', {
    idmaskapaipenerbangan: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmmaskapaipenerbangan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the flight'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_maskapaipenerbangan.associate = function(models) {
  };
  return m_maskapaipenerbangan;
};