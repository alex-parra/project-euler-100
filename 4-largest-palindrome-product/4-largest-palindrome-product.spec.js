import { largestPalindromeProduct } from './4-largest-palindrome-product';

test('largestPalindromeProduct(2) should return 9009', () => {
  expect(largestPalindromeProduct(2)).toBe(9009);
});

test.only('largestPalindromeProduct(3) should return 906609', () => {
  expect(largestPalindromeProduct(3)).toBe(906609);
});
