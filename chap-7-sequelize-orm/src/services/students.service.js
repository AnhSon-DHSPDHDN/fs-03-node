import { Student } from "../models/students.model.js";

const getAllStudents = async () => {
  const students = await Student.findAll();
  return students;
};

const getStudentById = async (id) => {
  const student = await Student.findByPk(id);
  return student;
};

export { getAllStudents, getStudentById };
