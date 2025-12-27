const expenseModel = require("../models/Expense");


exports.addExpense = async (req, res) => {
    try {
        const { expenseAmount, description, category } = req.body;
        const createExpense = await expenseModel.create({ expenseAmount, description, category });
        res.status(200).json({ message: "Added successfully", createExpense });
    } catch (error) {
        res.status(500).json({ message: "Oops failed to add expenses!!" });
    }
}



exports.getExpense = async (req, res) => {
    try {
        const allExpenses = await expenseModel.findAll();
        res.status(200).json(allExpenses);
    } catch (error) {
        res.status(500).json({ message: "Oops failed to fetch expenses!!" });
    }
}


exports.editExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { expenseAmount, description, category } = req.body;
        const expense = await expenseModel.findByPk(id);
        expense.expenseAmount = expenseAmount;
        expense.description = description;
        expense.category = category;
        await expense.save();
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Oops failed to edit expenses!!" });
    }
}


exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await expenseModel.findByPk(id);
        await expense.destroy();
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Oops failed to delete expenses!!" });
    }
}
