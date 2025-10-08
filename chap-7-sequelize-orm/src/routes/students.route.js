import { Router } from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentsRouter = Router();

studentsRouter.get("/", studentsController.getAllStudents);
studentsRouter.get("/:id", studentsController.getStudentById);

export default studentsRouter;
