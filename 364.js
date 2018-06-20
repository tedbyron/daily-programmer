/**
 * 2018-06-18
 * #364
 * easy
 * bonus
 * create a DnD-style dice roller
 */

/**
 * takes a string input of the form 'NdM' and rolls N M-sided dice
 * @param  {string} inputString input string
 * @return {string}             sum of rolls and a list of the rolls
 */
function dndRoll(inputString) {
  const inputArray = inputString.split('d')

  let floor = Math.floor(1)
  let ceiling = Math.ceil(parseInt(inputArray[1]))
  let rolls = []

  for (i = parseInt(inputArray[0]) - 1; i >= 0; i--) {
    rolls[i] = Math.floor(Math.random() * (ceiling - floor)) + floor
  }

  let sum = rolls.reduce((x, y) => x + y)
  return `${sum}: ${rolls.join(' ')}`
}
