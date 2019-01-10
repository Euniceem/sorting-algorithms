const selectionSort = function (array) {
  for (var i = 0; i < array.length; i++) {
    //set min to the current iteration of i
    let min = i;

    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;  // finds smallest number in the array and swaps places
  }
  return array;
};

let array = [3, 2, 10, 5, 1, 7]
console.log('selectionSort should return [1,2,3,5,7,10]-->', selectionSort(array));