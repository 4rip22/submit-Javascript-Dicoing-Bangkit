import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

const numberForFactorial = 5;
console.log(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`);
/**
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
let fibonacciSeries = [];
for (let i = 0; i <= numberForFibonacci; i++) {
  fibonacciSeries.push(fibonacci(i));
}
console.log(fibonacciSeries);
/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen 10 adalah:
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
