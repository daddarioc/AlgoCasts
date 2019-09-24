// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// another working option using slice

// function chunk(array, size) {
//   let chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, size + index));
//     index += size;
//   }

//   return chunked;
// }

//***************************************************** */
//correct (working) solution option 1

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

//****************************************************** */
// revised second try after seeing suggested path..no dice

function chunk(array, size) {
  let chunked = [];

  for (let i = 0; i < array.length; i++) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      let newChunk = [array[i]];
      chunked.push(newChunk);
    } else {
      last.push(array[i]); // <== this was a problem, no reference to the current array chunk, just adding an element to the chunked array before
    }
  }

  return chunked;
}

//   return chunked;
// }

/*************************************************************** */
//busted original attempt

// function chunk(array, size) {
//   let targetArray = [];

//   let i = 0;

//   if (size >= array.length) {
//     //case where number of items per sub-array exceeds source array
//     return targetArray.push(array);
//   } else if (array.length % size === 0) {
//     //case where an evenly divisible number of source array elements is present
//     let numberOfArrays = array.length / size;

//     do {
//       let subArray = [];

//       //
//       for (let j = 0; j < size; j++) {
//         subArray.push(array[j]);
//       }

//       for (let k = 0; k < size; k++) {
//         array.shift();
//       }

//       targetArray.push(subArray);
//       i++;
//     } while (i < numberOfArrays);
//   } else {
//     //case where an unevenly chunkable number of source array elements is present
//     let numberOfEvenArrays = array.length / size;
//     let remainder = array.length % size;
//     console.log('now doing: ' + array + ': ' + size);
//     do {
//       debugger;

//       let subArray = [];

//       //again get each sub-array to the specified size
//       for (let j = 0; j < size; j++) {
//         subArray.push(array[j]);
//       }

//       //clear the source array to reset the counts
//       for (let k = 0; k < size; k++) {
//         array.shift();
//       }

//       //add the new sub array
//       targetArray.push(subArray);
//       i++;
//     } while (i <= numberOfEvenArrays);
//     debugger;
//     console.log('after the even adds: ' + targetArray.toString());
//     //add the leftovers
//     subArray = [];
//     for (let m = 0; m < remainder; m++) {
//       subArray.push(array[m]);
//     }
//     targetArray.push(subArray);
//   }

//   return targetArray;
// }

module.exports = chunk;
