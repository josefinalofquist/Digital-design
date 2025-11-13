// Utgå från att filerna students.js och array_utils.js har laddats upp
// 1) Vad gör foo?
// 2) Vad gör programmet nedan?
// 3) Föreslå bättre namn på funktioner, nycklar, variabler och texter

function foo (x) {
  let y = 0;
  let yy = 0;
  for (let z of x.courses) {
    yy += z.credits;
    if (z.mark != "X" && z.mark != "F") {
      y += z.credits;
    }
  }
  return {
    key1: y,
    key2: yy
  };
}

let pnrInput = prompt("Ange personnummer (AAAAMMDD-XXXX): ");
let student = findStudentByPNR(x);
if (!student) {
  console.log("Ingen student med det personnummret");
} else {
  let fr = foo(student);
  console.log(`text1: ${fr.key1}, text2: ${fr.key2}`);
}  

