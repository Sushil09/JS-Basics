// Question: Write a function int fib(int n) that returns Fn. For example, if n = 0, then fib() should return 0. If n = 1,
// then it should return 1. For n > 1, it should return Fn-1 + Fn-2
//0,1,1,2,3,5,8,13,21,34,55,89....

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci(number) {
  if (number == 0) return 0;
  if (number == 1) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

// let fn = fibonacci(9);
// console.log(fn);

//Printing sequence:

rl.question('Till what number you need fibonacci ?', (name) => {
    for (let i = 0; i < name; i++) {
        console.log(fibonacci(i));
      }      
    rl.close();
  });
  
