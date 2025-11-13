function foo (x) {

  if (typeof x != "string") {
    throw Error("Not a string");
  }

  let ds = {};
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "a" || x[i] > "z") continue;
    if (ds[x[i]] == undefined) {
      ds[x[i]] = 1;
    } else {
      ds[x[i]]++;
    }
  }
  
  return ds;

}

foo("abc");

let tests = [
  "abc",
  "abcabcc",
  "As you were saying... Don't miss Malmö!",
  42,
];

for (let test of tests) {
  console.log(foo(test));
}
