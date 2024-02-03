'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Airplanes', [{
       modelNumber: 'boing737',
       capacity: 300,
       createdAt:new Date(),
       updatedAt:new Date()
     }
    ,{
      modelNumber: 'airbus23',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber: '34boing ',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber: 'boing 54',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber: 'boing77',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber: 'boing37',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelNumber: 'boing837',
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
