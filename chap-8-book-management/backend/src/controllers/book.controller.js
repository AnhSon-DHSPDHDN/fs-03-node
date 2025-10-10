import * as bookService from "../services/book.service.js";

export const getAllBooks = async (req, res) => {
  const books = await bookService.getAllBooks();
  res.status(200).send(books);
};
