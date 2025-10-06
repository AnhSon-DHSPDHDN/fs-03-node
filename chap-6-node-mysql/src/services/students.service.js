import pool from "../utils/connection.js";

export const getAllStudents = async () => {
  const [rows] = await pool.query("select * from students");
  return rows;
};

export const getStudentById = async (id) => {
  const [rows] = await pool.query("select * from students where card_id = ?", [
    id,
  ]);
  return rows[0];
};

export const createStudent = async (student) => {
  const { card_id, student_name, address, tel } = student;
  await pool.query(
    "insert into students(card_id, student_name, address, tel) values(?, ?, ?, ?)",
    [card_id, student_name, address, tel]
  );
  return student;
};

export const updateStudent = async (id, student) => {
  const { card_id, student_name, address, tel } = student;
  await pool.query(
    "update students set card_id = ?, student_name = ?, address = ?, tel = ? where card_id = ?",
    [card_id, student_name, address, tel, id]
  );
  return student;
};

export const deleteStudent = async (id) => {
  await pool.query("delete from students where card_id = ?", [id]);
};
