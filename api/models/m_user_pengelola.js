const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const m_user_pengelola = sequelize.define('m_user_pengelola', {
    iduserpengelola: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50],
      },
    },
    idklpuserpengelola: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nmuserpengelola: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-zA-Z0-9-._/\ ]"],
        len: [5,150]
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
        len: [5,150]
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
        isEmail: {
          args: true,
          msg: 'Please enter a valid email'
        },
        len: [8,150]
      },
    },
    nohp: {
      type:DataTypes.STRING,
      validate: {
        is: ["^[0-9()+]"],
        len: [8,50]
      },
      allowNull: {
        args: true
      },
      unique: {
        args: true,
        msg: 'No HP already exists'
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
  m_user_pengelola.beforeCreate(function(model){
    model.username = model.username.toLowerCase();
    model.email = model.email.toLowerCase();
  });
  m_user_pengelola.afterValidate(function(model){
    model.passwd = bcrypt.hashSync(model.passwd, 8);
  });
  m_user_pengelola.afterUpdate(function(model){
    model.updatedAt = new Date();
  });
  m_user_pengelola.associate = function(models) {
  };
  return m_user_pengelola;
};