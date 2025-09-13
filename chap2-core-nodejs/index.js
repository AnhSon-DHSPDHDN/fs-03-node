import { fileURLToPath } from "url";
import { sum } from "./utils.js";
import path from "path";
import fs from "fs";
import readline from "readline";
import EventEmitter from "events";

console.log(global);

const myEvent = new EventEmitter();

// myEvent.on("handlerError", (error) => {
//   console.log("Has error: ", error);
//   // Có thể ghi log vào 1 file
// });

// Thực thi event và xoá event
// myEvent.once("handlerError");

// try {
//   throw new Error();
// } catch {
//   myEvent.emit("hanllerError", "Error syntax");
// }

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("sum 5, 7: ", sum(5, 7));
console.log("Current filename: ", __filename);
console.log("Current dirname: ", __dirname);

const inputFilePath = path.join(__dirname, "assets", "input.txt");

fs.readFile(inputFilePath, (err, data) => {
  if (err) {
    console.log("Error read file");
    return;
  }

  console.log("File data: ", data);
});

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Gia cua Iphone 17?\n", (answer) => {
//   console.log("Iphone 17: ", answer, "VND");
//   rl.close();
// });

// console.time("tinh_sum(10,10)");
// for (let i = 0; i < 1000; i++) {
//   sum(10, 10);
// }
// console.timeEnd("tinh_sum(10,10)");

// const buffer1 = Buffer.from("Son");
// console.log(buffer1);
