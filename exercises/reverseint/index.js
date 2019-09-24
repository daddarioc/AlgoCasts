// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /*
    notes - first glance...gets ugly fast without some kind of tricks
    take the number, convert to string and output
    need to clean up result to cover some cases:
      doesn't account for negatives
      doesn't account for leading zeroes

    Trickers/helpers:
      toString() - derp
      Math.sign() - could use this to check if something is negative, make it positive, then switch it back
      parseInt() - turn string back into a number which would clear the 0s problem
  */

  //convert to string and reverse, and convert back to int
  let result = parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );

  return result * Math.sign(n);
}

module.exports = reverseInt;

//first attempt************************
// let isNegative;

//   //check sign and make positive
//   if (Math.sign(n) < 0) {
//     isNegative = true;
//     n *= -1;
//   }

//   //convert to string and reverse
//   const numberString = n.toString();

//   let reverse = n
//     .toString()
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');

//   let result = parseInt(reverse);

//   if (isNegative) {
//     return -1 * result;
//   } else {
//     return result;
//   }
