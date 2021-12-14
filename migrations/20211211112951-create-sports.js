'use strict';
module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable('sports', {
      sportId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      sport_name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Datatypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Datatypes.DATE
      }
    });
  },
  down: async (queryInterface, Datatypes) => {
    await queryInterface.dropTable('sports');
  }
};