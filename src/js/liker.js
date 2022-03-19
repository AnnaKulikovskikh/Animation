export default function liker() {
  const like = document.querySelector('.like');
  let s = 0;
  like.addEventListener('click', ({ target }) => {
    s += 1;
    const fly = document.createElement('div');
    fly.className = 'fly';
    if (s % 2 === 0) {
      fly.classList.add('fly_left');
    } else {
      fly.classList.add('fly_right');
    }
    fly.style.top = `${target.offsetTop - fly.offsetHeight}px`;
    fly.style.left = `${target.offsetWidth + target.offsetLeft - fly.offsetWidt / 2}px`;
    target.append(fly);
    target.addEventListener('animationend', () => {
      fly.remove();
    });
  });
}
