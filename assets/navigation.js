(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-menu');
  if (!header || !button || !menu) return;
  header.classList.add('menu-ready');
  button.hidden = false;
  const close = () => { button.setAttribute('aria-expanded', 'false'); };
  button.addEventListener('click', () => button.setAttribute('aria-expanded', String(button.getAttribute('aria-expanded') !== 'true')));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
})();
