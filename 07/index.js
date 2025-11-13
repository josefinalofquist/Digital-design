
function foo (a) {

  if (!Array.isArray(a)) {
    throw Error("Not an array");
  };

  let type = typeof a[0];
  for (let e of a) {
    if (typeof e != type) {
      throw Error("Not the same type");
    }
  }

  let a2 = [];
  while (a.length > 0) {
    let min = a[0];
    let indexOfMin = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] < min) {
        min = a[i];
        indexOfMin = i;
      }
    }
    a2.push(min);
    a.splice(indexOfMin, 1);
  }
  
  return a2;
  
}

let tests = [
  [3,6,-1,7],
  ["alexandra", "aruba", "aida", "agneta"],
  ["alma", 42, "aida", "agnes"],
];

for (let t of tests) {
  console.log(foo(t));
}