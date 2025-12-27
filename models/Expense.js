const { DataTypes } = require('sequelize');
const sequelize = require("../utils/database");

const Expense = sequelize.define(
    'Expense',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        expenseAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    },
);

module.exports = Expense;