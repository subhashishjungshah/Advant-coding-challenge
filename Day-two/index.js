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
    char = line[index];

    // Check whether the charackter is a number or not
    if (!isNaN(line[index])) {
      arr.push(line[index]);
      char = "";
    }
    // Logic for adding charackters and check with array
    char += line[index + 1] + line[index + 2];

    for (let i = 1; i < 3; i++) {
      if (numbers.includes(char)) {
        arr.push(numbers.indexOf(char) + 1);
        char = "";
        break;
      }
      char += line[index + 3 + (i - 1)];
      console.log(char);
    }
  }
  console.log(arr);
  // count = Number(arr[0]) * 10 + Number(arr[arr.length - 1]);
  // console.log(count);
});
