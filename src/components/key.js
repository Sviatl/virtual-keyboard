export default class Key {
  constructor(key, callback, notEnglish) {
    this.key = key.key;
    this.notEnglish = notEnglish;
    if (key.upkey === undefined) {
      this.upkey = key.key.toUpperCase();
    } else {
      this.upkey = key.upkey;
    }
    if (key.keyLang === undefined) {
      this.keyLang = key.key;
    } else {
      this.keyLang = key.keyLang;
    }
    if (key.upkeyLang === undefined) {
      this.upkeyLang = this.keyLang.toUpperCase();
    } else {
      this.upkeyLang = key.upkeyLang;
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
    if (this.notEnglish) {
      this.element.textContent = this.keyLang;
    } else {
      this.element.textContent = this.key;
    }
    this.element.addEventListener('click', () => {
      this.callback(this);
    });
  }

  click() {
    this.element.classList.add('key-active');
  }

  unclick() {
    this.element.classList.remove('key-active');
    const event = new Event('click');
    this.element.dispatchEvent(event);
  }

  render(parent) {
    parent.appendChild(this.element);
  }

  change(shift, capsLock, notEnglish) {
    let { key } = this;
    let { upkey } = this;
    if (notEnglish) {
      key = this.keyLang;
      upkey = this.upkeyLang;
    }
    if (capsLock) {
      if (shift) {
        this.element.textContent = key;
      } else {
        this.element.textContent = upkey;
      }
    } else if (shift) {
      this.element.textContent = upkey;
    } else {
      this.element.textContent = key;
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
