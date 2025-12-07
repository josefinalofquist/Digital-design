function sortArray (array) {
  let sortedArray = [];
  while (array.length > 0) {
    let min = array[0];
    let indexPnrOfMin = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        indexPnrOfMin = i;
      }
    }
    sortedArray.push(min);
    array.splice(indexPnrOfMin, 1);
  }
  return sortedArray
}