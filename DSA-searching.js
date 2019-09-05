
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}


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
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

const sList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

//console.log(binarySearch(sList, 8));
console.log(binarySearch(sList, 16));






//breadth-first search
// bfs(tree, values = []) {
//   const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
//   const node = tree.root;
//   queue.enqueu(node);
//   while (queue.length) {
//       const node = queue.dequeue(); //remove from the queue
//       values.push(node.value); // add that value from the queue to an array

//       if (node.left) {
//           queue.enqueue(node.left); //add left child to the queue
//       }

//       if (node.right) {
//           queue.enqueue(node.right); // add right child to the queue
//       }
//   }

//   return values;
// }