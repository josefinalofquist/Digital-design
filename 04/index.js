
function foo (a, e) {
  
  if (!Array.isArray(a)) throw Error("Not an array");

  let c1 = 0;
  let c2 = 0;
  for (let e1 of a) {
    if (e1 === e) c1++;
    if (e1 == e) c2++;
  }
  
  return [c1, c2];
  
}

let test1 = foo([1, "2", 3, 4, 5], 5);

let test2 = foo([1, 2, 3, 4, 5], 6);

let test3 = foo([1, 2, 1, true, "1"], 1);

let test4 = foo("[1, 2, 1, true]", "1");