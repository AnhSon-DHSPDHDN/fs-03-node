import express from "express";
import bodyParser from "body-parser";
import booksRouter from "./routes/books.route.js";
import cors from "cors";

const app = express();

// Enable All CORS Requests
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/books", booksRouter);

export default app;
