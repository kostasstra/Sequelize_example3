'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Areas}) {
      // define association here
      {
        // define association here
        this.hasMany(Areas, {foreignKey: 'regionId'})
      }
       
      }
    
      //toJSON()
      //{
        //     return {...this.get(), regionId: undefined,createdAt:undefined,updatedAt:undefined}
        //}
        
      
  }
  
  Regions.init({

    regionId:{
       type:DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,

    },

    region_name:
    {
      type:DataTypes.STRING,
      allowNull: false,
     
    },

  }, {
    sequelize,
    tableName: 'region',
    modelName: 'Regions',
  });
  return Regions;
};