const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem('items')) || [];
populateList(items, itemsList);


function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  // to empty the input field again
  this.reset();
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function populateList(plates = [], plateList) {
  // the id in the input and the for in the label should be same to work
  plateList.innerHTML = plates.map(
    (plate, i) => `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
      plate.done ? "checked" : ""
    } />
    <label for="item${i}">${plate.text}</label>
    </li>`
    )
    .join("");
  }
  
  function toggleDone (e) {
    console.log(e.target);
    if(!e.target.matches('input')) return; // this will filter only the input elements
    const ele = e.target;
    
    const index = ele.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
  }

itemsList.addEventListener('click', toggleDone);

// here we cant add the event listener to each checkbox because it will keep on adding
// so event delegation is used here
addItems.addEventListener("submit", addItem);
