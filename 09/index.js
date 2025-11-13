// 1) Vad gör foo?
// 2) Föreslå bättre namn på alla funktioner, variabler och texter
// 3) Vilka värden ger test-uttrycken?

function foo (x, y) {

  if (!Number.isInteger(x) || x < 0) {
    throw Error("Error!");
  }

  let z = [];
  for (let i = 0; i < x; i++) {
    z.push(y);
  }
  return z;

}

// test1, vilket värde ger uttrycket foo(3, 4) ?
// test2, vilket värde ger uttrycket foo(2) ?
// test3, vilket värde ger uttrycket foo([], 1) ?
