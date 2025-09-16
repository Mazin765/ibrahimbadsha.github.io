// Typing animation effect
const typing = document.querySelector('.typing');
const text = typing.textContent;
typing.textContent = '';
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();
