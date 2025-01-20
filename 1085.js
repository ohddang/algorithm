const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  solution(line);
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(input) {
  const n = input.split(" ").map(Number);

  const x = n[0];
  const y = n[1];
  const w = n[2];
  const h = n[3];

  const minX = Math.min(x, w - x);
  const minY = Math.min(y, h - y);

  const result = Math.min(minX, minY);

  console.log(result);
}
