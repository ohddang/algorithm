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
    const N = Number(input);
    let result = -1;
    
    for (let fiveKg = Math.floor(N / 5); fiveKg >= 0; fiveKg--) {
        const remainWeight = N - (fiveKg * 5);
        
        if (remainWeight % 3 === 0) {
            const threeKg = remainWeight / 3;
            result = fiveKg + threeKg;
            break;
        }
    }
    
    console.log(result);
}