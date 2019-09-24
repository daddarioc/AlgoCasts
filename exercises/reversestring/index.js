// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*notes
    for each character in str, starting from the last
    make a new string, which starts with the last character of the soruce string
    then continue chopping off the last character in the source string and appending it to the target string

    for (i = str.length - 1; i--; i >= 0)
      revered += str[i]
  */
  // my solution
  //
  // let reverse = '';
  // for (let i = str.length; i--; i >= 0) {
  //   reverse += str.charAt(i);
  // }
  // return reverse;

  // another solution with built in helper methods
  //
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  // for loop using new syntax from ES2015; avoids simple mistakes you can make in normal for loops
  //
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // fancier 'you know your stuff' solution
  //
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // });
  //
  // simplified to

  return str.split('').reduce((reversed, character) => character + reversed);
}

module.exports = reverse;
