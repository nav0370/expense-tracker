const router = require("express").Router();
const expenseRouter = require("./expenses");

router.use("/expenses", expenseRouter);

module.exports = router;
