let lastNames = [];
for (let element of STUDENTS) {
  lastNames.push(element["lastname"]);
}

let lastNamesSorted = sortArray(lastNames);

let sortedStudents = [];
for (let oneLastName of lastNamesSorted) {

  for (let i = 0; i < STUDENTS.length; i++) {
    if (STUDENTS[i]["lastname"] === oneLastName) {
      sortedStudents.push(STUDENTS[i]);
      break;
    }
  }

}

