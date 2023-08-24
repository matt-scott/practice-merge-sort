// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  console.log('half stuff coming!')
  // Divide the array in half
  let half = arr.length / 2;
  console.log(half);
  let lh = arr.slice(0,half);
  console.log (lh);
  let rh = arr.slice(half);
  console.log (rh);

  // Recursively sort the left half
  mergeSort(lh);
  // Recursively sort the right half
  mergeSort(rh);

  // Merge the halves together and return
  // return merge(lh,rh);
  let x = merge(lh,rh);
  console.log(`merged values = ${x}`);
  return x;
  // for actual algorithm. leaving console.logs in to demonstrate merge process in console.
  return merge(lh,rh);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let arr = [];

  // Point to the first value of each array
  let pointerA = 0;
  let pointerB = 0;

  // While there are still values in each array...
  while ((pointerA !== arrA.length) || (pointerB !== arrB.length)) {
    // if pointerA === arrA.length, fill rest of arrB
    if (pointerA === arrA.length) {
      // while pointerB !== arrB.length
      while (pointerB !== arrB.length) {
        // push next arrB val
        arr.push(arrB[pointerB]);
        // pointerB++
        pointerB++;
      }
    }
    // if pointerB === arrB.length, fill rest of arrA
    else if (pointerB === arrB.length) {
      // while pointerA !== arrA.length
      while (pointerA !== arrA.length) {
        // push next arrA val
        arr.push(arrA[pointerA]);
        // pointerA++
        pointerA++;
      }
    }
    else {
    // otherise, sort between the two
      // Compare the first values of each array
      if (arrA[pointerA] > arrB[pointerB]) {
          // Add the smaller value to the return array
          arr.push(arrB[pointerB]);
          // Move the pointer to the next value in that array
            pointerB++;
      }
      else {
        // Add the smaller value to the return array
        arr.push(arrA[pointerA]);
        // Move the pointer to the next value in that array
          pointerA++;
      }
    }
  }
  // Return the return array
  return arr;
}

module.exports = [merge, mergeSort];

