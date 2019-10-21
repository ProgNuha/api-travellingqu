module.exports = (sequelize, DataTypes) => {
  const m_klpuserpengelola = sequelize.define('m_klpuserpengelola', {
    idklpuserpengelola: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmklpuserpengelola: {
      type:DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    inisialklpuserpengelola: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,10]
      },
      allowNull: {
        args: false,
        msg: 'Please enter inisial'
      },
      unique: {
        args: true,
        msg: 'Inisial already exists'
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_klpuserpengelola.associate = function(models) {
  };
  return m_klpuserpengelola;
};