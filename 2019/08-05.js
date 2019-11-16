/**
 * #380
 * Smooshed Morse Code #1
 */

const ALPHABET = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'.split(' ');

const morseEncode = str => {
  return str.split('').map(char => {
    const charCode = char.charCodeAt()
    const pos = charCode - (charCode & 96);
    return pos === 0 ? ' ' : ALPHABET[pos - 1];
  }).join('');
};
