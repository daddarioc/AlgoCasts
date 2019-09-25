// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//another solution by converting a charmap to an array, sorting the string, then checking for equality

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagrams(stringA, stringB) {
  let leftStr = cleanString(stringA);
  let rightStr = cleanString(stringB);

  if (leftStr === rightStr) return true;
  else return false;
}

//working solution

// function anagrams(stringA, stringB) {
//   let firstMap = createCharMap(stringA);
//   let secondMap = createCharMap(stringB);

//   if (Object.keys(firstMap).length !== Object.keys(secondMap).length)
//     return false;

//   for (let character in firstMap) {
//     if (firstMap[character] === secondMap[character]) continue;
//     else {
//       console.log('character did not match: ' + character);
//       return false;
//     }
//   }

//   return true;
// }

module.exports = anagrams;
