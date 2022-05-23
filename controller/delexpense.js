const Expenses = require("../model/expense");

const delExpense = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  try {
    const delexp = await Expenses.deleteOne({ _id: id });
    console.log(delexp, "delexp");
    res.send(delexp);
  } catch (error) {
    res.send(error);
  }
};

module.exports = delExpense;
