module.exports = (sequelize, DataTypes) => {
  const m_kategoriwisata = sequelize.define('m_kategoriwisata', {
    idkategoriwisata: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmkategoriwisata: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the category'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_kategoriwisata.associate = function(models) {
  };
  return m_kategoriwisata;
};