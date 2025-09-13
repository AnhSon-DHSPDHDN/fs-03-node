console.log("Hello World - FS-03-NodeJs");

const numbers = [7, 6, 4, 1, 5, 3];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Tong cua numbers la: ", sum);

const array = [6, 7, 8, 6, 9, 10, 7, 8, 8, 11, 8];
// In ra màn hình các phần tử trùng lặp

const duplicateNumbers = [];
for (let i = 0; i <= array.length - 1; i++) {
  for (let j = i + 1; j <= array.length - 1; j++) {
    const prevNumber = array[i];
    const nextNumber = array[j];
    if (prevNumber === nextNumber && !duplicateNumbers.includes(nextNumber)) {
      duplicateNumbers.push(prevNumber);
      break;
    }
  }
}
console.log(duplicateNumbers, "duplicateNumbers");
