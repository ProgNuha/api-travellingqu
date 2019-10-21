module.exports = (sequelize, DataTypes) => {
  const m_jnspaketperjalanan = sequelize.define('m_jnspaketperjalanan', {
    idjnspaketperjalanan: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmjnspaketperjalanan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the type of trip'
      }
    },
    idklpperjalanan: {
      type:DataTypes.SMALLINT,
      allowNull: {
        args: false,
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_jnspaketperjalanan.associate = function(models) {
  };
  return m_jnspaketperjalanan;
};