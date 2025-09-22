// Tinh toan tu input.txt => ouput.txt
// Ten, DiemTB
// SonTVA, 7

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const students = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputPath = path.join(__dirname, "assets", "input.txt");

fs.readFile(inputPath, "utf-8", (err, data) => {
  if (err) {
    console.log("read file fail");
  }

  const lines = data.split("\n");
  lines.forEach((line, index) => {
    if (index === 0 || !line) {
      return;
    }

    const rawLine = line.split(",");
    const student = {
      name: "",
      scores: [],
    };
    rawLine.forEach((item, rawLineIndex) => {
      if (rawLineIndex === 0) {
        student.name = item;
        return;
      }
      student.scores.push(Number(item));
    });
    students.push(student);
  });

  const computedStudents = students.map((st) => {
    let sum = 0;
    st.scores.forEach((_score) => {
      sum += _score;
    });

    return {
      name: st.name,
      average: sum / st.scores.length,
    };
  });

  console.log(computedStudents);
  const stream = fs.createWriteStream(`${__dirname}/assets/output.txt`);
  stream.once("open", function (fd) {
    stream.write("Ten, DiemTB\n");
    computedStudents.forEach((_student) => {
      stream.write(`${_student.name}, ${_student.average}\n`);
    });
    stream.end();
  });
});
