export default class Key {
  constructor(key, callback) {
    this.key = key.key;
    this.callback = callback;
    this.element = document.createElement('div');
    this.element.className = 'key';
    if (key.grow) {
      this.element.classList.add('key-grow');
    }
    if (key.grow2) {
      this.element.classList.add('key-grow2');
    }
    this.element.textContent = this.key;
    this.element.addEventListener('click', () => {
      this.callback(this.key);
    });
  }

  render(parent) {
    parent.appendChild(this.element);
  }
}
