import * as studentsService from "../services/students.service.js";

const getAllStudents = async (req, res) => {
  const data = await studentsService.getAllStudents();
  res.status(200).json(data);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const data = await studentsService.getStudentById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

export { getAllStudents, getStudentById };
