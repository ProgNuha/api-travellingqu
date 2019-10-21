module.exports = (sequelize, DataTypes) => {
  const t_orderpaketwisata = sequelize.define('t_orderpaketwisata', {
    idorderpaketwisata: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
    },
    iduserpengguna: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z0-9-._/\]"],
        len: [3,50]
      },
      allowNull: true
    },
    idpaketperjalanandetail: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idmetodebayar: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    tglorder: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    tglmulaiwisata: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tglakhirwisata: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jmlpax: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    totalbiayawisata: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ispayment: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
      allowNull: false
    },
    tglpayment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    iscancel: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
      allowNull: false
    },
    tglcancel: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    id: false
  });
  t_orderpaketwisata.beforeUpdate(function(model){
    if(model.ispayment === 1){
      throw console.error("Sorry, you can not cancel the order");
    }
  });
  t_orderpaketwisata.afterUpdate(function(model){
    if(model.ispayment === 1){
      model.tglpayment = new Date();
    }
    if(model.iscancel === 1){
      model.tglcancel = new Date();
    }
    model.updatedAt = new Date();
  });
  t_orderpaketwisata.associate = function(models) {
  };
  return t_orderpaketwisata;
};