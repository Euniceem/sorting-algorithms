const insertionSort = function (n) {
  for (var i = 0; i < n.length; i++) {
    let value = n[i];
    //store the current n value so it can be placed right
    for (var j = i - 1; j > -1 && n[j] > value; j--) {
      //loop through n in the sorted array (n from the current to the beginning)
      //copy each item to the next one
      n[j + 1] = n[j];
    }
    // Should hold the value of the current sorted item
    n[j + 1] = value;
  }
  return list;
}

const list = [3, 6, 1, 7, 5, 2]
console.log('insertionSort should return [1,2,3,5,6,7]-->', insertionSort(list))