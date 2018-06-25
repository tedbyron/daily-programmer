/**
 * #364
 * The Ducci Sequence
 *
 * Given an n-tuple of integers (a_1, a_2, ... a_n) the next n-tuple in the
 * sequence is formed by taking the absolute differences of neighboring
 * integers. Print sequences until sequences descend to zeroes or a repeating
 * sequence.
 */

/**
 * @param  {number} curr      current n-tuple
 * @param  {number} step = 0  current step in the sequence
 * @param  {array}  prev = [] array of previous n-tuples joined as Strings
 * @return {undefined}        no return, function logs step number and n-tuples
 */
const ducci = (curr, step = 0, prev = []) => {
  console.log(`step ${step}: ${curr.join(', ')}`)
  if (curr.some(c => c > 0) && !prev.includes(curr.join(''))) {
    let next = curr.map((e, i) => Math.abs(e - curr[(i + 1) % curr.length]))
    ducci(next, ++step, [...prev, curr.join('')])
  }
}
