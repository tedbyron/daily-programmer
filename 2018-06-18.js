/**
 * 2018-06-18
 * #364
 * create a DnD-style dice roller
 */

/**
 * takes a string input of the form 'NdM' and rolls N M-sided dice
 * @param  {string} input input string
 * @return {string}   sum of rolls and a list of the rolls
 */
function dndRoll (input) {
  const [TIMES, SIDES] = input.split('d').map(c => parseInt(c))
  let rolls = []

  for (let i = 0; i < TIMES; i++) {
    rolls[i] = Math.floor(Math.random() * SIDES) + 1
  }

  let sum = rolls.reduce((x, y) => x + y)
  return `${sum}: ${rolls.join(' ')}`
}