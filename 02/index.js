
function foo (a) {
  
  // Notera att if-satsen endast har en instruktion (return false). I de fallen går det bra att inte skriva måstecken i if-satsen.
  if (!Array.isArray(a)) throw Error("Not an array");

  let a2 = [];
   
  for (let element of a) {
    a2.unshift(element);  
  }  
  return a2;
}


// Tester
let test1 = foo([1, 9, 6, 5, 4]);
let test2 = foo([]);
let test3 = foo([true, false]);
let test4 = foo({key1: 1, key2: [2,3]});