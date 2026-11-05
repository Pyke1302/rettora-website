(() => {
  const dialog = document.getElementById('test-access');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  document.querySelectorAll('[data-test-access]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.showModal();
    });
  });
  dialog.querySelector('.test-access-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => dialog.querySelector('form').reset());
})();
