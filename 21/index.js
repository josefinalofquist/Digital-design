function addItem(originalArray, item) {

  if (!Array.isArray(originalArray)) {
    throw new Error("originalArray must be an array");
  }

  let newArray = originalArray;
  newArray.push(item);
  return newArray;
}

let arr = [1, 2, 3];
let result = addItem(arr, 4);

console.log("Original:", arr);
console.log("Result:", result);
