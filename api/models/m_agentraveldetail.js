module.exports = (sequelize, DataTypes) => {
  const m_agentraveldetail = sequelize.define('m_agentraveldetail', {
    idagentraveldetail: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        is: ["^[a-zA-Z0-9-._/\]"],
        len: [3,50]
      },
    },
    idagentravel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idpaketperjalanan: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\]"],
        len: [3,50]
      },
      allowNull: {
        args: false,
        msg: 'Please select'
      }
    },
    idkota: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_agentraveldetail.associate = function(models) {
  };
  return m_agentraveldetail;
};