import { Book } from "../models/book.model.js";

export const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

export const getBookById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

export const createBook = async (bookData) => {
  const newBook = await Book.create(bookData);
  return newBook;
};

export const updateBook = async (id, bookData) => {
  const book = await Book.findByPk(id);
  if (book) {
    await book.update(bookData);
    return book;
  }
  return null;
};

export const deleteBook = async (id) => {
  const book = await Book.findByPk(id);
  if (book) {
    await book.destroy();
    return true;
  }
  return false;
};
