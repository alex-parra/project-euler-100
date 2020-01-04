/**
 * Binet's Formula - Calculate the Fib of the nth 'n' term
 */
export const fibOfN = n => {
  const { pow, sqrt, floor } = Math;
  const Phi = (sqrt(5) + 1) / 2;
  const fibOfN = (pow(Phi, n) - pow(-Phi, -n)) / sqrt(5);
  return floor(fibOfN);
};

/**
 * Get the Fibonacci sequence from 0 up to 'n'. Tail recursive.
 * @param {number} n Maximum index to calculate corresponding Fibonacci
 * @returns {number[]} The Fibonacci sequence up to 'n' e.g. [ 0, 1, 1, 2, 3, 5, 8, ... ]
 */
export const fibonacci = (maxIndex, seq = []) => {
  const { length } = seq;
  seq = [ ...seq, length < 2 ? length : seq.slice(-2).reduce((sum, n) => sum + n, 0) ];
  return length !== maxIndex ? fibonacci(maxIndex, seq) : seq;
};

const isEven = num => num % 2 === 0;
const sumEvens = nums => nums.reduce((sum, n) => isEven(n) ? sum + n : sum, 0);

/**
 * Find the sum of the even-valued terms up to 'n'
 * @param {number} n Maximum value inclusive to evaluate
 */
export function fiboEvenSum(n) {
  // The freeCodeCamp exercise disregards F0(0) and F1(1) [ 1, 2, 3, 5, 8, 13, ...]
  // So we need to increment our upTo by 2 since the full sequence is [ 0, 1, 1, 2, 3, 5, ... ]
  return sumEvens(fibonacci(n + 1));
}
