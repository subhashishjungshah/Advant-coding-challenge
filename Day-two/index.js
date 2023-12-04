const fs = require("fs");
const readline = require("readline");

const file = readline.createInterface({
  input: fs.createReadStream("./demo.txt"),
  output: process.stdout,
  terminal: false,
});

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let count = 0;

file.on("line", (line) => {
  let arr = [];
  let char = "";
  for (let index = 0; index < line.length; index++) {
    char += line[index];
    if (numbers.includes(char)) {
      arr.push(numbers.indexOf(char) + 1);
      //   arr.push(char);
      char = "";
    }
    if (!isNaN(line[index])) {
      arr.push(line[index]);
      char = "";
    }
  }
  count = Number(arr[0]) * 10 + Number(arr[arr.length - 1]);
  console.log(count);
});
