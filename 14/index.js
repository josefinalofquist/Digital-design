// 1) Vad gör foo?
// 2) Vad gör programmet nedan?
// 3) Föreslå bättre namn på alla funktioner, variabler och texter


function foo (z) {
  let x = [];
  for (let xx of STUDENTS) {
    if (xx.firstname == z) {
      x.push(xx);
    }
  }
  return x;
}

let y = prompt("text1");
let v = foo(y);

if (v.length == 0) {
  console.log("text2");
} else {
  for (let yy of v) {
    console.log(`${yy.firstname} ${yy.lastname}`);
  }
}
