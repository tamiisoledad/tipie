'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      })
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    email: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};