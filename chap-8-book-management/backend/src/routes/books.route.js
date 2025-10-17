import { Router } from "express";
import * as bookController from "../controllers/book.controller.js";

const booksRouter = Router();

booksRouter.get("/", bookController.getAllBooks);
booksRouter.get("/:id", bookController.getBookById);
booksRouter.post("/", bookController.createBook);
booksRouter.put("/:id", bookController.updateBook);
booksRouter.delete("/:id", bookController.deleteBook);

export default booksRouter;
