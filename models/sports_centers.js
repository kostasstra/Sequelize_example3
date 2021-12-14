'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sports_Centers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Areas) {
      // define association here
      //this.hasMany(Areas, {foreignKey: 'id'})
    }
  };
  Sports_Centers.init({


    sportcenterId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    areasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sport_center_name: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    phone_number: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'sports_centers',
    modelName: 'Sports_Centers',
  });
  return Sports_Centers;
};