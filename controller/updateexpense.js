const Expenses = require("../model/expense");

const updateExpense = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  try {
    const updateExp = await Expenses.updateOne({ _id: id }, req.body);
    console.log(updateExp, "updateExp");
    res.send(updateExp);
  } catch (error) {
    res.send(error);
  }
};

module.exports = updateExpense;
