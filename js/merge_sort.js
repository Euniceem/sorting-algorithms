//Split the array into havles and merger them recursively
const mergeSort = function (arr) {
  let arrL = arr.length
  if (arrL < 2) {
    //return once we hit an array with a single item
    return arr;
  }
  const middle = Math.floor(arrL / 2); //get the middle item of the array rounded down
  const left = arr.slice(0, middle); //items on the left side
  const right = arr.slice(middle); //items on the right side 

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftL = left.length;
  let rightL = right.length;
  let l = 0;
  let r = 0;
  while (l < leftL && r < rightL) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

const list = [5, 3, 1, 9, 3, 2, 1, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 1, 2, 3, 3, 3, 5, 6, 8, 9 ]






