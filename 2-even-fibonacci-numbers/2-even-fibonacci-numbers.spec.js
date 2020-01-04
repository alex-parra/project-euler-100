import { fibOfN, fibonacci, fiboEvenSum } from './2-even-fibonacci-numbers';

it('Calculates correct Fibonacci value for given term', () => {
  expect(fibOfN(3)).toBe(2);
  expect(fibOfN(5)).toBe(5);
  expect(fibOfN(10)).toBe(55);
  expect(fibOfN(13)).toBe(233);
  expect(fibOfN(25)).toBe(75025);
  expect(fibOfN(28)).toBe(317811);
});

it('Generates correct Fibonacci sequence', () => {
  const seq5 = fibonacci(5).join(', ');
  expect(seq5).toBe('0, 1, 1, 2, 3, 5');

  const seq10 = fibonacci(10).join(', ');
  expect(seq10).toBe('0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55');
});

it('fiboEvenSum(10) should return 44', () => {
  expect(fiboEvenSum(10)).toBe(44);
});

it('fiboEvenSum(18) should return 3382', () => {
  expect(fiboEvenSum(18)).toBe(3382);
});

it('fiboEvenSum(23) should return 60696', () => {
  expect(fiboEvenSum(23)).toBe(60696);
});

it('fiboEvenSum(43) should return 350704366', () => {
  expect(fiboEvenSum(43)).toBe(350704366);
});
