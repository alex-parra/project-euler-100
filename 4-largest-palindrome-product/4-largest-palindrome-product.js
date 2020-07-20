const { pow } = Math;

const isPalindrome = num => {
  const numStr = `${num}`;
  return numStr === [...numStr].reduce((str, l) => `${l}${str}`, '');
}

export function largestPalindromeProduct(n) {
  const max = pow(10, n) - 1;
  const min = pow(10, n - 1);

  let a = max;
  let prod = 0;
  while( a >= min ) {
    for( let b = max; b >= min; --b ) {
      prod = a * b;
      if( isPalindrome(prod) ) return prod;
    }
    a -= 1;
  }
  return 0;
}
