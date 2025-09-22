import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const users = [];

app.get("/", (req, res) => {
  res.send("Hello world TEST");
});

app.get("/user", (req, res) => {
  res
    .status(200)
    .json({
      message: "Success",
      data: users,
    })
    .end();
});

app.post("/user", (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
  };
  console.log(newUser);
  users.push(newUser);

  res
    .status(200)
    .json({
      message: "Create data success",
      data: newUser,
    })
    .end();
});

export default app;
