// Utgå från arrayen STUDENTS i filen students.js
// 1) Vad gör f1 och vad gör programmet nedan?
// 2) Föreslå bättre namn på alla funktioner, variabler och texter

function f1 (x) {
  for (let y of STUDENTS) {
    if (student.pnr == x) {
      return y;
    }
  }
  return false;
}

let x = prompt("x:");
let y = f1(x);
if (!y) {
  console.log("text1");
} else {
  console.log(y.firstname + " " + y.lastname);
}
