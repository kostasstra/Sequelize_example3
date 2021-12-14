'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'kostas@hotmail.com',
        uuid: '873bf2aa-3610-4672-ab82-1bc7eb9d4e1f',
        role: 'admin',
        createdAt: '2021-12-06T13:43:46.901Z',
       updatedAt: '2021-12-06T19:10:58.201Z',

      
      },{
        name: 'jane Doe',
        email: 'jane@hotmail.com',
        uuid: '873bf2aa-3610-4672-ab82-1bc7eb9d4e1f',
        role: 'admin',
        createdAt: '2021-12-06T13:43:46.901Z',
       updatedAt: '2021-12-06T19:10:58.201Z',

      
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('users', null, {});
  }
};
