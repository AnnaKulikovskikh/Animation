export default function liker() {
  const like = document.querySelector('.like');
  like.addEventListener('click', ({ target }) => {
    const fly = document.createElement('div');
    fly.className = 'fly';
    fly.style.top = `${target.offsetTop - fly.offsetHeight}px`;
    fly.style.left = `${target.offsetWidth + target.offsetLeft - fly.offsetWidt / 2}px`;
    target.append(fly);
    target.addEventListener('animationend', () => {
      fly.remove();
    });
  });
}
