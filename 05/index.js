let texts = [
  `I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.`,
  "biljetter finns till salu",
  42,
];

function foo (x, y) {
  if (typeof x != "string" || typeof y != "string") {
    throw Error("Not a string in foo");
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i] == y) return true;
  }
  return false;
}

function bar (x) {
  if (typeof x != "string") {
    throw Error("Not a string in bar");
  }
  let z;
  while (z == undefined) {
    z = prompt("A low case letter, please");
    if (z.length != 1 || z < "a" || z > "z") z = undefined;
  }
  
  let a = x.split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (foo(a[i], z)) b.push(a[i]);
  }

  return b;
}

console.log(bar("hello, jag bor i Malmö"));



// Test 1. Utgå från att användaren matar in "m"
console.log(bar(texts[0]));

// Test 2. Utgå från att användaren matar in "l"
console.log(bar(texts[1]).length);

// Test 3
console.log(bar(texts[2]));
