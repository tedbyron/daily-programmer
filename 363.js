/**
 * 2018-06-11
 * #363
 * easy
 * bonus 1
 * check a given word for the grammar rule: I before E, except after C
 */

/**
 * check word for I before E, except after c
 * @param  {string} word word to check
 * @return {boolean}     true if regex test passes
 */
function check(word) {
  return !/cie|(?:^|[^c])ei/.test(word)
}

/**
 * logs the number of matches in a text file from the url parameter
 * @param {string} url url to check words in
 */
checkTxtFile(url) => {
  fetch(url)
    .then(req => req.text())
    .then(txt => console.log(txt
  		.trim()
  		.split(/\s+/)
  		.reduce((t, word) => t + !check(word), 0)
    ))
}
