'use strict';

let user = [
  {
    email: "demo@tipieapp.com",
    password: "$2a$10$n1TObKWMpZ1bQjK2eoRHee9aRweEWyUmg0PT.kEiunXs6.YsDu3Z6",
    createdAt: new Date,
    updatedAt: new Date
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', user, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
