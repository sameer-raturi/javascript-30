const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult);

const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(allAdults);

// first item that it finds
const comment = comments.find((comm) => comm.id === 823423);

// first item that it finds and returns its index
const commentIndex = comments.findIndex((comm) => comm.id === 823423);

// to delete the comment with the given id
comments.splice(index, 1);



