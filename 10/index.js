// 1) Vad gör programmet nedan?
// 2) Föreslå bättre namn på alla funktioner, variabler och texter

let x = false;
let y = Math.floor(11 * Math.random());
while (!x) {

  let z;
  while (z == undefined) {
    z = prompt("text1");
    z = parseInt(z);
    if (isNaN(z)) {
      alert("text2");
      z = undefined;
    } else if (z < 0 || z > 10) {
      alert("text3");
    }
  }

  if (z == y) {
    x = true;
  } else if (z > y) {
    alert("text4");
  } else {
    alert("text5");
  }
}

alert("text6");

