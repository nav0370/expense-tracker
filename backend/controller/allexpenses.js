const Expense = require("../model/expense");

const allE = async (req, res, next) => {
  const allExpenses = await Expense.find({});

  res.send(allExpenses);
};

module.exports = allE;
