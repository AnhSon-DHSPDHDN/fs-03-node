import * as studentsService from "../services/students.service.js";

// Get all Student
export const getAllStudents = async (req, res) => {
  const students = await studentsService.getAllStudents();
  res.status(200).json(students);
};

export const getStudentById = async (req, res) => {
  const id = req.params.id;
  const student = await studentsService.getStudentById(id);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found!" });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const result = await studentsService.createStudent(student);
  res.status(201).json(result);
};

export const updateStudent = async (req, res) => {
  const id = req.params.id;
  const student = req.body;
  const existingStudent = await studentsService.getStudentById(id);
  if (existingStudent) {
    const result = await studentsService.updateStudent(id, student);
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Student not found!" });
  }
};

export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  const existingStudent = await studentsService.getStudentById(id);
  if (existingStudent) {
    await studentsService.deleteStudent(id);
    res.status(200).json({
      message: `Student with id ${id} deleted successfully!`,
    });
  } else {
    res.status(404).json({ message: "Student not found!" });
  }
};
