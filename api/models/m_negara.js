module.exports = (sequelize, DataTypes) => {
  const m_negara = sequelize.define('m_negara', {
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nmnegara:  {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter country`s name'
      }
    },
    isdomestik: {
      type: DataTypes.SMALLINT,
      allowNull: {
        args: true,
        msg: 'Please choose'
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_negara.associate = function(models) {
  };
  return m_negara;
};