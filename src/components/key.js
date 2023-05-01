export default class Key {
  constructor(key, callback) {
    this.key = key.key;
    if (key.upkey === undefined) {
      this.upkey = key.key.toUpperCase();
    } else {
      this.upkey = key.upkey;
    }
    this.code = key.code;
    this.callback = callback;
    this.isFunctional = key.isFunctional;
    this.isSpecial = key.isSpecial;
    this.isArrow = key.isArrow;
    this.element = document.createElement('div');
    this.element.className = 'key';
    if (key.isFunctional || key.isSpecial || key.isArrow) {
      this.element.classList.add('key-functional');
    }
    if (key.grow) {
      this.element.classList.add('key-grow');
    }
    if (key.grow2) {
      this.element.classList.add('key-grow2');
    }
    this.element.textContent = this.key;
    this.element.addEventListener('click', () => {
      this.callback(this);
    });
  }

  click() {
    const event = new Event('click');
    this.element.dispatchEvent(event);
    this.element.classList.add('key-active');
    setTimeout(() => {
      this.element.classList.remove('key-active');
    }, 200);
  }

  render(parent) {
    parent.appendChild(this.element);
  }

  change(shift) {
    if (shift === true) {
      this.element.textContent = this.upkey;
    } else {
      this.element.textContent = this.key;
    }
  }

  pressed(isPressed) {
    if (isPressed) {
      this.element.classList.add('key-active');
    } else {
      this.element.classList.remove('key-active');
    }
  }
}
