import express from "express";
import bodyParser from "body-parser";
import booksRouter from "./routes/books.route.js";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/books", booksRouter);

export default app;
