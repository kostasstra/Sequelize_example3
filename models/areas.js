'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Regions,Sports_Centers}) {
      // define association here
     // define association here
     {
      // define association here
     this.belongsTo(Regions, {foreignKey: 'regionId'})
     //                                                                   this.hasMany(Sports_Centers, {foreignKey: 'id'})
    }
    }
  //  toJSON()
    //  {
     //        return {...this.get(), regionId: undefined,createdAt:undefined,updatedAt:undefined}
      //  }
}
  Areas.init({

    area_name:
    {
    type: DataTypes.STRING,
    allowNull:false,  
    
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'area',
    modelName: 'Areas',
  });
  return Areas;
};