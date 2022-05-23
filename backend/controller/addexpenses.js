const Expenses = require("../model/expense");

const addExpenses = async (req, res) => {
  const { body } = req;
  try {
    const addexp = await Expenses.create(body);
    res.send(addexp);
  } catch (error) {
    res.send(error);
  }
};

module.exports = addExpenses;
