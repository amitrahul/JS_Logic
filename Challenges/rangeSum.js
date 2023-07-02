/**
 * Given two integers a and b, which can be positive or negative, find the
 *  sum of all the integers between and including them and return it. 
 * If the two numbers are equal return a or b.
 * 
 * 
 * (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */

//  # 01
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

//   # 02
function getSum(a, b) {
  return Array.from({ length: b >= a ? b - a + 1 : a - b + 1 }, (_, i) =>
    b >= a ? i + a : i + b
  ).reduce((a, b) => a + b, 0);
}

//   # 03
const getSum = (a, b) => {
  let sum = 0;
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

//  # 04
const getSum = (a, b) => {
  let sum = 0;

  while (a !== b) {
    sum += a < b ? a++ : b++;
  }
  return sum + a;
};
