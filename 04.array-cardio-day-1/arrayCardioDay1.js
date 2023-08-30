const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "H Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  " Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter(

// 1. Filter the list of inventors for those who were born in the 1500's

const ans1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.table(ans1);
// Array.prototype.map()

// 2. Give us an array of the inventory first and last names
const ans2 = inventors.map((inventor) => inventor.first + " " + inventor.last);
console.log(ans2);

//Array.prototype.sort()

// 3. Sort the inventors by birthdate, oldest to youngest

const ans3 = inventors.sort((a, b) => a.year - b.year);
console.table(ans3);
// Array.prototype.reduce()

// 4. How many years did all the inventors live?

const ans4 = inventors.reduce(
  (acc, inventor) => acc + inventor.passed - inventor.year,
  0
);

console.log(ans4);

// 5. Sort the inventors by years lived
const ans5 = inventors.sort((a, b) => {
  const aLifeTime = a.passed - a.year;

  const bLifeTime = b.passed - b.year;
  return aLifeTime - bLifeTime;
});

console.table(ans5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise

// Sort the people alphabetically by last name
