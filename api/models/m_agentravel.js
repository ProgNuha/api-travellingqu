module.exports = (sequelize, DataTypes) => {
  const m_agentravel = sequelize.define('m_agentravel', {
    idagentravel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    inisialagentravel: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-_/]"],
        len: [3,10]
      },
      allowNull: {
        args: false,
        msg: 'Please enter inisial agen travel'
      },
      unique: {
        args: true,
        msg: 'Inisial already exists'
      }
    },
    nmagentravel: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-_/ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter agen travel'
      }
    },
    fotoagentravel: {
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
  m_agentravel.associate = function(models) {
  };
  return m_agentravel;
};