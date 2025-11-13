// Utgå från att filerna students.js och array_utils.js har laddats upp
// 1) Vad gör programmet nedan?
// 2) Föreslå bättre namn på funktioner, nycklar, variabler och texter
// 3) Det finns en gräns för hur många gånger for-loopen (den med i) kan köras utan att programmet hänger sig. Varför?


const CITIES = [
  "Malmö", "Växjö", "Göteborg", "Östersund", "Stockholm", "Uppsala", "Lund", "Umeå", "Norrkoping", "Linköping", "Helsingborg", "Ystad", "Gävle", "Halmstad", "Karlskrona", "Kristianstad", "Luleå", "Madrid", "Damaskus", "Tehran", "Bagdad", "Kabul", "Istanbul", "Sofia", "Warsawa", "Krakow", "Hanoi", "Paris", "Rom", "Barcelona", "Hebron", "Berlin", "Hamburg", "Munich", "Islamabad", "Rabat", "Helsinki", "Beijing", "Bangkok"
];

const FIRSTNAMES = [
  "Aya", "Alya", "Bengt", "Agatha", "Akramuddin", "Emilia", "Eugene", "Elisabeth", "Hugo", "Idris", "Bojana", "Jasmine", "Kai", "Kamilla", "Khalid", "Luca", "Malik", "Marcos", "Mona", "Nadja", "Julie", "Omar", "Ali", "Bertil", "Tobias", "Samir", "Shreya", "Victoria", "Walter", "Xavier", "Yasmine", "Abdellah", "Fahtwa", "Fatima", "Rebecca", "Guillaume", "Suzanna", "Youssef", "Zakaria", "Antonio", "Anna", "Eva", "Emil", "Frida", "Hans", "Ivan", "Johan", "Kalle", "Lars", "Maj", "Nils", "Olof", "Petter", "Rune", "Sven", "Tore", "Ulf", "Victor", "Wolfgang", "Xander", "Ylva", "Zack", "Michael", "Karl", "Ludvig", "Amaya", "Sheherazadeh", "Alladin", "Dorothy", "Rudy", "Kurt", "Rashid", "Cole", "Paul", "Edla", "Alvaro", "Gonxalo", "Daniel", "David", "Erika", "Teresa", "Salman"
];

const LASTNAMES = [
  "Garcia", "Qassim", "Cohen", "Guve", "Bilal", "Tolstoi", "Jones", "Joplin", "Nuth", "Dudek", "Roth", "Malim", "Negri", "Ganges", "Li", "Song", "Ghibli", "Akira", "Fernandez", "Locomia", "Anatol", "Frendor", "Lucino", "LeGarret", "Brunel", "Schimio", "Barinaga", "Irurita", "Truan", "Romero", "Andersson", "Karlsson", "Svensson", "Hagbert", "Lund", "Sjöberg", "Gustafsson", "Lindahl", "Hjelm", "Nilsson", "Bengtsson", "Farouq", "Shirzad", "Ghulam", "Habib", "Hegel", "Marx", "Wittgenstein", "Hacek", "Aristomenis", "Boztepe", "Cerny", "Mendel", "Hofstadter", "Hopper", "Lovelace", "Turing", "Socrates", "Plato", "Augustim", "Lopez", "Bhuto", "Yinping", "Kim", "Sung", "Grand", "Tolkien", "Narnia", "Rushdie"
];

let xx = [];

for (let i = 0; i < 100; i++) {

  let a, b; // Det går att deklarera två variabler med samma "let"
  
  while (a == undefined) {
    a = arrayRandom(FIRSTNAMES);
    b = arrayRandom(LASTNAMES);
    
    for (let x of xx) {
      if (x.k1 === a && x.k2 === b) {
        a = undefined;
        break;
      }
    }
  }

  xx.push({
    k1: a,
    k2: b,
    city: arrayRandom(CITIES),
  });
}

console.log(xx);