module.exports = (sequelize, DataTypes) => {
  const m_propinsi = sequelize.define('m_propinsi', {
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nmpropinsi: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter province`s name'
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_propinsi.associate = function(models) {
  };
  return m_propinsi;
};