module.exports = (sequelize, DataTypes) => {
  const m_hotel = sequelize.define('m_hotel', {
    idhotel: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
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
      allowNull: false
    },
    nmhotel: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter hotel'
      }
    },
    bintang: {
      type: DataTypes.SMALLINT,
      validate: {
        min: 1,
        max: 5
      },
      allowNull: false
    },
    notelp: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[0-9()+]"],
        len: [5,50]
      },
      allowNull: {
        args: true
      },
      unique: {
        args: true,
        msg: 'no telp already exists'
      }
    },
    nmpic: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z-._/\' ]"],
        len: [3,50]
      },
      allowNull: {
        args: true,
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    id: false
  });
  m_hotel.associate = function(models) {
  };
  return m_hotel;
};