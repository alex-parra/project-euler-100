import { primeFactors, largestPrimeFactor } from './3-largest-prime-factor';

it('returns an empty array for 1', () => {
  expect(primeFactors(1)).toEqual([]);
});

it('factors 2', () => {
  expect(primeFactors(2)).toEqual([2]);
});

it('factors 3', () => {
  expect(primeFactors(3)).toEqual([3]);
});

it('factors 4', () => {
  expect(primeFactors(4)).toEqual([2, 2]);
});

it('factors 6', () => {
  expect(primeFactors(6)).toEqual([2, 3]);
});

it('factors 8', () => {
  expect(primeFactors(8)).toEqual([2, 2, 2]);
});

it('factors 9', () => {
  expect(primeFactors(9)).toEqual([3, 3]);
});

it('factors 27', () => {
  expect(primeFactors(27)).toEqual([3, 3, 3]);
});

it('factors 625', () => {
  expect(primeFactors(625)).toEqual([5, 5, 5, 5]);
});

it('factors 901255', () => {
  expect(primeFactors(901255)).toEqual([5, 17, 23, 461]);
});

it('factors 93819012551', () => {
  expect(primeFactors(93819012551)).toEqual([11, 9539, 894119]);
});

it('largestPrimeFactor(2) should return 2', () => {
  expect(largestPrimeFactor(2)).toBe(2);
});

it('largestPrimeFactor(3) should return 3', () => {
  expect(largestPrimeFactor(3)).toBe(3);
});

it('largestPrimeFactor(5) should return 5', () => {
  expect(largestPrimeFactor(5)).toBe(5);
});

it('largestPrimeFactor(7) should return 7', () => {
  expect(largestPrimeFactor(7)).toBe(7);
});

it('largestPrimeFactor(13195) should return 29', () => {
  expect(largestPrimeFactor(13195)).toBe(29);
});

it('largestPrimeFactor(600851475143) should return 6857', () => {
  expect(largestPrimeFactor(600851475143)).toBe(6857);
});
