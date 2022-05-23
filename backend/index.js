const express = require("express");
const HOST = "127.0.0.1";
const PORT = 3000;
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const router = require("./router");
app.use(router);

mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker")
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, HOST, () =>
      console.log(`server is running http://${HOST}:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
