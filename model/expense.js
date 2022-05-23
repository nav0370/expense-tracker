const { Schema, model } = require("mongoose");

const ExpenseModel = new Schema({
  expensename: { type: String },
  expensedate: { type: Date },
  expenseamount: { type: Number },
});

const Expenses = model("Expenses", ExpenseModel, "expenses");

module.exports = Expenses;
