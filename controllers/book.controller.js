"use strict";

const bookModel = require("../models/books.model");

const getBooks = (request, response) => {
  bookModel.find((error, BooksData) => {
    response.json(BooksData);
  });
};

module.exports = {
  getBooks,
};
