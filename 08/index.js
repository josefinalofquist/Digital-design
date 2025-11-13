// Funktionen bar returnerar ett slumpmässigt heltal mellan min och max inklusive

// 1) Vad gör foo?
// 2) Föreslå bättre namn på alla funktioner, variabler och texter
// 3) Vad kommer det att loggas vid testerna? 


function bar (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function foo (x) {

  if (!Number.isInteger(x) || x < 0) {
    throw Error("text1");
  }

  let a = [];
  for (let i = 0; i < x; i++) {
    a.push(bar(1,6));
  }
  return a;

}

// test1
console.log(foo(3));

// test2
console.log(foo(-1));
