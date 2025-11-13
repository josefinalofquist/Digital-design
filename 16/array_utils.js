function findStudentByPNR(pnrSearch) {
  const Days_In_Months = [31,28,31,30,31,30,31,31,30,31,30,31];

  if (pnrSearch.length != 13) {
    throw Error("Felaktigt personnummer: " + pnrSearch);
  }

  let y = pnrSearch.substring(0, 4);
  let m = pnrSearch.substring(4, 6);
  let d = pnrSearch.substring(6, 8);
  
  y = parseInt(y);
  m = parseInt(m);
  d = parseInt(d);
  
  if (isNaN(y) || isNaN(m) || isNaN(d)) {
    throw Error("Felaktigt födelsedatum: " + pnrSearch);
  }
  
  if (y < 1900 || y > 2025) {
    throw Error("Felaktigt år: " + y);
  }
  
  if (m < 1 || m > 12) {
    throw Error("Felaktig månad: " + m);
  }
  
  if (d < 1 || d > Days_In_Months[m - 1]) {
    throw Error("Felaktig dag: " + d);
  }
  
  for (let student of STUDENTS) {
    if (student.pnr == pnrSearch) {
      return student;
    }
  }

  return false;
}