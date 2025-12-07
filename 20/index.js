function indexOfLetter (string, letter) {
  
  if (typeof string != "string" || typeof letter != "string") {
    throw Error("Not both strings");
  }  

  if (letter.length != 1) {
    throw Error("Not a letter");
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      return i;
    } else {
      return -1;
    }
  }
}

