'use strict';

const {DataTypes} =require("sequelize/dist");


module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('area', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      area_name:
      {
      type: DataTypes.STRING,
      allowNull:false,
      },    
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"region",
          key:"regionId"
        },
           
     },
     
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('area');
  }
};