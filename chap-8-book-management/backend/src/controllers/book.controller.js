import * as bookService from "../services/book.service.js";

export const getAllBooks = async (req, res) => {
  const books = await bookService.getAllBooks();
  res.status(200).send(books);
};

export const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await bookService.getBookById(id);
  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send({ message: "Book not found" });
  }
};

export const createBook = async (req, res) => {
  const bookData = req.body;
  const newBook = await bookService.createBook(bookData);
  res.status(201).send(newBook);
};

export const updateBook = async (req, res) => {
  const id = req.params.id;
  const bookData = req.body;
  const updatedBook = await bookService.updateBook(id, bookData);
  if (updatedBook) {
    res.status(200).send(updatedBook);
  } else {
    res.status(404).send({ message: "Book not found" });
  }
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  const deleted = await bookService.deleteBook(id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Book not found" });
  }
};
