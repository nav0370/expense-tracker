const router = require("express").Router();
const addexpenses = require("../controller/addexpenses");
const allexpenses = require("../controller/allexpenses");
const delexpense = require("../controller/delexpense");
const updateExpense = require("../controller/updateExpense");

router.get("/allexpenses", allexpenses);
router.post("/addexpenses", addexpenses);
router.delete("/delexpense/:id", delexpense);
router.put("/updateexpense/:id", updateExpense);

module.exports = router;
