function quickSort(arr, left, right) {
  let len = arr.length,
    pivot,
    partitionIndex;


  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}


function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


console.log(quickSort([16, 11, 9, 7, 6, 5, 3, 2], 0, 7));

//Another way

function qSort(arr) {
  if (arr.length <= 1) {
    return arr; // returns if there is 1 or less element
  }
  const [pivot, ...rest] = arr;
  const left = [], right = [];
  rest.forEach(el => el < pivot ? left.push(el) : right.push(el));
  return qSort(left).concat(pivot).concat(qSort(right)); // sorted left array + pivot + sorted right array
}

console.log(qSort([16, 11, 9, 7, 6, 5, 3, 2]));