import { Book } from "../models/book.model.js";

export const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};
