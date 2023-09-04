const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const articles = ["a", "an", "the"];

const bandElement = document.querySelector("#bands");

const compare = (a, b) => {
  const sanitizedA = a
    .split(" ")
    .filter((word) => !articles.includes(word.toLowerCase()))
    .join(" ")
    .toLowerCase();
  const sanitizedB = b
    .split(" ")
    .filter((word) => !articles.includes(word.toLowerCase()))
    .join(" ")
    .toLowerCase();
  console.log(sanitizedA, sanitizedB);
  return sanitizedA.localeCompare(sanitizedB);
};

bands.sort(compare);

bandElement.innerHTML = bands.map((band) => `<li>${band}</li>`).join("");
