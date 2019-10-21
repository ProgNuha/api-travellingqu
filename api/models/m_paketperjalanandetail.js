module.exports = (sequelize, DataTypes) => {
  const m_paketperjalanandetail = sequelize.define('m_paketperjalanandetail', {
    idpaketperjalanandetail: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
      allowNull: false,
      primaryKey: true,
    },
    idpaketperjalanan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
    },
    idmaskapaipenerbanganbrngkt: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    idmaskapaipenerbanganpulang: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    nmpaketperjalanandetail: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter the detail of trip'
      }
    },
    durasi: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      // !add function in tripwisataperhari
    },
    minimumpax: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    hargaperpax: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_paketperjalanandetail.associate = function(models) {
  };
  return m_paketperjalanandetail;
};