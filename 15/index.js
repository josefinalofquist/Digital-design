// 1) Vad gör f1?
// 2) Vad gör programmet nedan?
// 3) Föreslå bättre namn på alla funktioner, variabler och texter


function f1(x) {
  const DS = [31,28,31,30,31,30,31,31,30,31,30,31];

  if (x.length != 13) throw Error("text0: " + x);

  let y = x.substring(0, 4);
  let m = x.substring(4, 6);
  let d = x.substring(6, 8);
  
  y = parseInt(y);
  m = parseInt(m);
  d = parseInt(d);
  
  if (isNaN(y) || isNaN(m) || isNaN(d)) {
    throw Error("text1");
  }
  
  if (y < 1900 || y > 2025) throw Error("text2" + y);
  
  if (m < 1 || m > 12) throw Error("text3" + m);
  
  if (d < 1 || d > DS[m - 1]) throw Error("text4" + d);
  
  for (let xx of STUDENTS) {
    if (xx.pnr == x) {
      return xx;
    }
  }

  return false;
}

let x = prompt("text5:");
let y = f1(x);
if (!y) {
  console.log("text6");
} else {
  console.log(`${y.firstname} ${y.lastname}`);
}  

