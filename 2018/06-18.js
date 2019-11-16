/**
 * #364
 * Create a Dice Roller
 *
 * Create a DnD-style dice roller
 */

/**
 * takes a string input of the form 'NdM' and rolls N M-sided dice
 * @param  {string} a input string
 * @return {string}   sum of rolls and a list of the rolls
 */
const dndRoll = a => {
 const [b, c] = a.split('d').map(x => parseInt(x))
 let e = []

 for (let i = 0; i < b; i++) {
   e[i] = Math.floor(Math.random() * c) + 1
 }

 let sum = e.reduce((x, y) => x + y)
 return `${sum}: ${e.join(' ')}`
};
