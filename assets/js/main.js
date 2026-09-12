const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
}

