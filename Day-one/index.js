const fs = require("fs");
const readline = require("readline");
const { pipeline } = require("node:stream/promises");

let count = 0;

const file = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
  output: process.stdout,
  terminal: false,
});

file.on("line", (line) => {
  let arr = [];
  for (let index = 0; index < line.length; index++) {
    if (!isNaN(line[index])) {
      arr.push(line[index]);
    }
  }
  count += Number(arr[0]) * 10 + Number(arr[arr.length - 1]);
  console.log(count);
});

// async function run() {
//   await pipeline(
//     readline.createInterface({
//       input: fs.createReadStream("./demo-input.txt"),
//       output: process.stdout,
//       terminal: false,
//     }),
//     fs.createWriteStream("./new.txt")
//   );
//   console.log("Pipeline succeeded.");
// }

// run().catch(console.error);
