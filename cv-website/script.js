document.addEventListener('DOMContentLoaded', () => {
  // Typing animation effect
  const typing = document.querySelector('.typing');
  if (!typing) return; // safety check

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
});
