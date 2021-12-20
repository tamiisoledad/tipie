'use strict';

let categories = [
  {
    name: "Cocina",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: "Recepción",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: "Salon",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: "IT",
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Categories', categories , {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
