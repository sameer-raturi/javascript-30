const checkboxElements = document.querySelectorAll(
  '.inbox input[type="checkbox"]'
);
let previousCheckedElement = null;

const handleCheck = (e) => {
  console.log(e);
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxElements.forEach((element) => {
      if (element === previousCheckedElement || element === e.target) {
        
        inBetween = !inBetween;
      }
      if (inBetween) element.checked = true;
      console.log(element, previousCheckedElement, inBetween);
    });
  }
  previousCheckedElement = e.target;
};

checkboxElements.forEach((element) =>
  element.addEventListener("click", handleCheck)
);
