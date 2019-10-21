const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const m_user_pengguna = sequelize.define('m_user_pengguna', {
    iduserpengguna: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
    },
    idklpuserpengguna: {
      type: DataTypes.SMALLINT,
      defaultValue: 1,
      allowNull: false
    },
    nmuserpengguna: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter a username'
      },
      unique: {
        args: true,
        msg: 'Username already exists'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        len: [3,100],
        isEmail: {
          args: true,
          msg: 'Please enter a valid email'
        },
      },
    },
    idkota: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idpropinsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idnegara: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    nohp: {
      type:DataTypes.STRING,
      validate: {
        is: ["^[0-9()+]"],
        len: [3,50]
      },
      allowNull: {
        args: true
      },
      unique: {
        args: true,
        msg: 'No HP already exists'
      }
    },
    passwd: {
      type: DataTypes.STRING,
      validate: {
        len: [8,150]
      },
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      }
    },
    lastlogin: {
      type: DataTypes.DATE,
      allowNull: {
        args: true
      },
    },
    isaktif: {
      type: DataTypes.SMALLINT,
      defaultValue: 1,
      allowNull: {
        args: false
      },
    },
    createdAt: {
      allowNull: true,
      defaultValue: new Date(),
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    id: false
  });
  m_user_pengguna.beforeCreate(function(model){
    model.username = model.username.toLowerCase();
    model.email = model.email.toLowerCase();
  });
  m_user_pengguna.afterValidate(function(model){
    model.passwd = bcrypt.hashSync(model.passwd, 8);
  });
  m_user_pengguna.afterUpdate(function(model){
    model.updatedAt = new Date();
  });
  
  m_user_pengguna.associate = function(models) {
  };
  return m_user_pengguna;
};