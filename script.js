// Accessible client-side validation for the demo contact form
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Last-updated + year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-updated').textContent = new Date().toLocaleDateString();

// Back-to-top button
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = (window.scrollY > 400) ? 'block' : 'none';
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Preserve visible focus when using keyboard
function handleFirstTab(e){
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
