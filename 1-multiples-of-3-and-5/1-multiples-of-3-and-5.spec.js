import { sumOfMultiples, multiplesOf3and5 } from './1-multiples-of-3-and-5';

it('sumOfMultiples(1, 10) should return 233168', () => {
  expect(sumOfMultiples(1, 10)).toBe(55);
});

it('sumOfMultiples(3, 999) should return 166833', () => {
  expect(sumOfMultiples(3, 999)).toBe(166833);
});

it('sumOfMultiples(5, 999) should return 99500', () => {
  expect(sumOfMultiples(5, 999)).toBe(99500);
});

it('sumOfMultiples(15, 999) should return 33165', () => {
  expect(sumOfMultiples(15, 999)).toBe(33165);
});

it('multiplesOf3and5(1000) should return 233168', () => {
  expect(multiplesOf3and5(1000)).toBe(233168);
});

it('multiplesOf3and5(49) should return 543', () => {
  expect(multiplesOf3and5(49)).toBe(543);
});

it('multiplesOf3and5(19564) should return 89301183', () => {
  expect(multiplesOf3and5(19564)).toBe(89301183);
});

it('multiplesOf3and5(8456) should return 16687353', () => {
  expect(multiplesOf3and5(8456)).toBe(16687353);
});
