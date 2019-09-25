// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(str) {
  const charMap = {};

  for (character of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[character] = charMap[character] + 1 || 1;
  }

  return charMap;
}

function objectToArray(obj) {
  let arr = [];

  for (item in obj) {
    arr.push(item);
  }

  return arr;
}

function anagrams(stringA, stringB) {
  let leftMap = createCharMap(stringA);
  let rightMap = createCharMap(stringB);
  let leftArr = objectToArray(leftMap);
  let rightArr = objectToArray(rightMap);

  leftArr = leftArr.sort().toString();
  rightArr = rightArr.sort().toString();

  console.log(leftArr);
  console.log(rightArr);

  if (leftArr === rightArr) return true;
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
