const canvas = document.querySelector("#draw");

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

const handleDrawing = e => {
  if(!isDrawing) return; // stop the fun running when they are not drawing
  console.log(e);
  ctx.beginPath();
  // start position
  ctx.moveTo(lastX, lastY);
  // end position
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  hue = hue%360;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
})

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
})

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
})

canvas.addEventListener('mousemove', handleDrawing);