//    *
//   ***
//  ***** 
// *******

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Till what row, you need pattern ?", (row) => {
  for (let i = 0; i < row; i++) {
    for (let j = row-1; j >= i; j--) {
        process.stdout.write(' ');
    }
    for (let j = 0; j <2*i+1; j++) {
        process.stdout.write('*');
    }
    console.log();
  }
  rl.close();
});


