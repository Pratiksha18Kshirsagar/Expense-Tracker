const express = require('express');
const router = express.Router();
const{getExpense , addExpense, editExpense, deleteExpense} = require("../controllers/expenseController")

router.get("/" , getExpense);
router.post("/add",addExpense);
router.put("/edit/:id" , editExpense);
router.delete("/delete/:id",deleteExpense)


module.exports = router;
