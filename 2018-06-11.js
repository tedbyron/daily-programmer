/**
 * #363
 * I before E except after C
 *
 * check a given word for the grammar rule: I before E, except after C
 */

/**
 * @param  {string} word word to check
 * @return {boolean}     true if regex test passes
 */
const check = word => !/cie|(?:^|[^c])ei/.test(word)

/**
 * @param {string} url url to check words in
 */
const checkTxtFile = url => {
  fetch(url)
    .then(req => req.text())
    .then(txt => console.log(txt.trim()
  		.split(/\s+/)
  		.reduce((t, word) => t + !check(word), 0)
    ))
}
