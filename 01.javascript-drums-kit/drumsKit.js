window.addEventListener('keydown', (e) =>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // for other than a-l keys
  
  audio.currentTime = 0; // this help us to play sound again even though the previous one is not over.
  
  audio.play();
  
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing')

})


window.addEventListener('transitionend', e => {
  if(e.propertyName !== "transform") return;
  const  key= e.target;
  key.classList.remove('playing')
})
