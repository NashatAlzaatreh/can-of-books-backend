"use strict";

const bookModel = require("../models/books.model");

const getBooks = (request, response) => {
  bookModel.find((error, BooksData) => {
    response.json(BooksData);
  });
};
const createBook = (request, response) => {
  const { title, description, status, email } = request.body;

  const newBook = new bookModel({
    title,
    description,
    status,
    email,
  });

  newBook.save();

  response.json(newBook);
};

const deleteBook = (request, response) => {
  console.log(request.params);
  const bookId = request.params.id;

  bookModel.deleteOne({ _id: bookId }, (error, deletedData) => {
    response.json(deletedData);
  });
};

// const updateBook = (request, response) => {
//   const { title, description, status, email } = request.body;
//   const bookId = request.params.id;

//   bookModel.findByIdAndUpdate(
//     { _id: bookId },
//     { title, description, status, email },
//     { new: true },
//     (error, updatedBookData) => {
//       response.json(updatedBookData);
//     }
//   );
// };

module.exports = {
  getBooks,
  createBook,
  deleteBook,
  // updateBook,
};
