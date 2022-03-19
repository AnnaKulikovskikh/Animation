export default function messenger() {
  const btn = document.querySelector('.messanger_btn');
  const form = document.querySelector('.form');
  btn.addEventListener('click', () => {
    form.classList.toggle('view');
    btn.classList.toggle('noview');
  });
}
