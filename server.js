"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const MONGO_URL = process.env.MONGO_URL;

// const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}`);


const bookShop = require("./helper/bookShop.seed ");
// bookShop(); // called once

const getIndex = require("./controllers/index.controller");
app.get("/", getIndex);

const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} = require("./controllers/book.controller");
app.get("/books", getBooks);
app.post("/books", createBook);
app.delete("/books/:id", deleteBook);
app.put("/books/:id", updateBook);
app.get("/test", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
