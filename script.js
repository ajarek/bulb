const bulboff = document.querySelector('.bulboff');
const body = document.querySelector('body');
const text = document.querySelector('h1');
const tablica = [`url('img/bulb.png')`, `url('img/bulboff.png')`];
let i = 0;
bulboff.addEventListener('click', () => {
   if (i === 0) {
      bulboff.style.backgroundImage = tablica[i];
      i = i + 1;
      body.style.background = 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(252,219,0,1) 50%, rgba(255,255,255,1) 100%)';
      text.style.textShadow = '2px 3px 3px #E33212'
   } else if (i === 1) {

      bulboff.style.backgroundImage = tablica[i]
      i = i - 1
      body.style.background = '#ffffff'
      text.style.textShadow = 'none'
   }

})

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('change')
   navbar.classList.toggle('change1')
})