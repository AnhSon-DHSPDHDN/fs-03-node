import { Router } from "express";
import * as bookController from "../controllers/book.controller.js";

const booksRouter = Router();

booksRouter.get("/", bookController.getAllBooks);

export default booksRouter;
