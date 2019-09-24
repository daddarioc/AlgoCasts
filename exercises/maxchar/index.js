// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //slightly more optimized / cleaner solution
  let arr = str.split('');
  let charMap = {};
  let currentMax = 0;
  let currentChar = '';

  for (let character of arr) {
    charMap[character] = charMap[character] + 1 || 1;

    if (charMap[character] > currentMax) {
      currentMax = charMap[character];
      currentChar = character;
    }
  }
  console.log('{' + currentChar + '}' + ' : ' + currentMax);
  return currentChar;
}

// my first working solution
//
// function maxChar(str) {
//   /* notes
//     first thought...split into array, iterate, and use a hash with each char as the key and then the value updated each hit
//     soooo no hashmaps in JS? same idea to be used by making the string chars into keys in an object instead, with hits as values
//   */
//   let arr = str.split('');
//   let charMap = {};
//   let currentMax = 0;
//   let max = {
//     char: '',
//     hits: 0
//   };

//   for (let character of arr) {
//     if (charMap[character]) {
//       charMap[character] += 1;
//     } else {
//       charMap[character] = 1;
//     }

//     if (charMap[character] > currentMax) {
//       currentMax = charMap[character];

//       max.char = character;
//       max.hits = currentMax;
//     }
//   }
//   console.log('{' + max.char + '}' + ' : ' + max.hits);
//   return max.char;
// }

module.exports = maxChar;
