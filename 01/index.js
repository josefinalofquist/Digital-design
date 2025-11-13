function foo (a,e) {

  if (!Array.isArray(a)) {
    throw Error("Not an array");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === e) {
      return i;
    }
  }

  return -1;  
}

let test1 = foo([1, 9, 6, 5, 4], 5);      
let test2 = foo([1, 9, 6, 5, 4], 2);      
let test4 = foo([1, 9, 6, 5, 4], "5");    
let test3 = foo("[1, 9, 6, 5, 4]", "5");  
