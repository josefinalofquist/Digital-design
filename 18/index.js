let x = [];
for (let element of STUDENTS) {
  x.push(element["pnr"]);
}

let xx = sortArray(x);

let y = [];
for (let k of xx) {

  for (let element of STUDENTS) {
    if (element.pnr === k) {
      y.push(element);
      break;
    }
  }

  for (let i = 0; i < STUDENTS.length; i++) {
    if (STUDENTS[i]["pnr"] === k) {
      y.push(STUDENTS[i]);
      break;
    }
  }

}

for (let i = 0; i < 5; i++) {
  console.log(`${y[i].firstname} ${y[i].lastname}`);
}
