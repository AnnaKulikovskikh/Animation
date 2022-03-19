export default class Collapse {
  init() {
    // this.div = document.createElement('div');
    // this.div.className = 'btn';
    // this.div.textContent = 'Collapse';
    // document.body.appendChild(this.div);
    document.querySelector('.btn').addEventListener('click', this.clicker);
  }

  clicker() {
    if (document.querySelector('.message')) {
      document.querySelector('.message').remove();
    } else {
      this.message = document.createElement('div');
      this.message.className = 'message';
      this.message.textContent = 'Ленечка, поставьте свое помойное ведро на рояль, и будем считать, что у нас, слава богу, имеется и «амори»…';
      this.after(this.message);
    }
  }
}
