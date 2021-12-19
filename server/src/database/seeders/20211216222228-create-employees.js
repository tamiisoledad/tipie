'use strict';

let employees = [
  {
    "name": "Martin",
    "age": "25",
    "sector": "Cocina",
    "email": "martin@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Tamara",
    "age": "28",
    "sector": "Salón",
    "email": "tamara@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Federico",
    "age": "39",
    "sector": "Recepción",
    "email": "federico@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Agustin",
    "age": "30",
    "sector": "Salón",
    "email": "agustin@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Luciana",
    "age": "29",
    "sector": "Salón",
    "email": "luciana@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Sebastián",
    "age": "21",
    "sector": "Recepción",
    "email": "sebastian@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Santiago",
    "age": "52",
    "sector": "IT",
    "email": "santiago@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Andres",
    "age": "49",
    "sector": "Cocina",
    "email": "andres@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Rodrigo",
    "age": "35",
    "sector": "Cocina",
    "email": "rodrigo@tipieapp.com",
    createdAt: new Date,
    updatedAt: new Date
},
{
    "name": "Lorena",
    "age": "40",
    "sector": "Recepción",
    "email": "lorena@tipieapp.com",
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
