//import React from 'react';

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  //base case
  if (start > end) {
    return -1;
  }

  //split array in half
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

export default binarySearch;