function foo (x1, x2) {

  if (!Array.isArray(x1) || !Array.isArray(x2)) {
    throw Error("text1");
  }

  let y = [];

  for (let e of x1) {
    y.push(e);
  }

  for (let e of x2) {
    if (y.includes(e)) {
      continue;
    }
    y.push(e);
  }

  // return y;
}


// TEST
let a1 = [1, 2, 3];
let a2 = ["2", 3, 4, 5];

let result = foo(a1, a2);

console.log("a1:", a1);
console.log("a2:", a2);
console.log("Result:", result);
