// ===== Modales accesibles =====
const openers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

openers.forEach((el) => {
  el.addEventListener('click', () => {
    const modal = document.getElementById(el.dataset.modal);
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

modals.forEach((modal) => {
  modal.querySelectorAll('[data-dismiss]').forEach((el) => {
    el.addEventListener('click', () => closeModal(modal));
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const open = document.querySelector('.modal.is-open');
    if (open) closeModal(open);
  }
});

function closeModal(modal) {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ===== Año dinámico =====
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();