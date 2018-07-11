/**
 * #365
 * Knuth up-arrow notaion
 */

/**
 * @param  {number} a base of the function
 * @param  {number} n number of up-arrows
 * @param  {number} b 'power' of the function
 * @return {number}   result of the function
 */
const knuth = (a, n, b) => {
  return b !== 0
    ? n !== 1
      ? knuth(a, n - 1, knuth(a, n, b - 1))
      : a ** b
    : 1;
};
