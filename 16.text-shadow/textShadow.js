const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // console.log(x, y);
  // this is required because of event delegation the element inside hero
  // will also throw mouse move event due to event bubbling
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = x/width * walk - walk/2;
  const yWalk = y/height * walk - walk/2;
  console.log(xWalk, yWalk);
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`
}

hero.addEventListener("mousemove", shadow);
