'use strict';

let employees = [
  {
    "name": "Martin",
    "age": "25",
    "sector": "Cocina",
    "email": "martin@tipieapp.com",
    "categoryId": 1,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Tamara",
    "age": "28",
    "sector": "Salon",
    "email": "tamara@tipieapp.com",
    "categoryId": 3,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Federico",
    "age": "39",
    "sector": "Recepcion",
    "email": "federico@tipieapp.com",
    "categoryId": 2,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Agustin",
    "age": "30",
    "sector": "Salon",
    "email": "agustin@tipieapp.com",
    "categoryId": 3,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Luciana",
    "age": "29",
    "sector": "Salon",
    "email": "luciana@tipieapp.com",
    "categoryId": 3,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Sebastián",
    "age": "21",
    "sector": "Recepcion",
    "email": "sebastian@tipieapp.com",
    "categoryId": 2,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Santiago",
    "age": "52",
    "sector": "IT",
    "email": "santiago@tipieapp.com",
    "categoryId": 4,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Andres",
    "age": "49",
    "sector": "Cocina",
    "email": "andres@tipieapp.com",
    "categoryId": 1,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Rodrigo",
    "age": "35",
    "sector": "Cocina",
    "email": "rodrigo@tipieapp.com",
    "categoryId": 1,
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Lorena",
    "age": "40",
    "sector": "Recepcion",
    "email": "lorena@tipieapp.com",
    "categoryId": 2,
    createdAt: new Date,
    updatedAt: new Date
}
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Employees',employees, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
