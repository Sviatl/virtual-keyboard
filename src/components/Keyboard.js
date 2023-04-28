import listOfKeys from './list-of-keys.js';
import Key from './key.js';

class Keyboard {
  constructor(parent, textarea) {
    this.parent = parent;
    this.textarea = textarea;
    this.keys = [];

    listOfKeys.forEach((row) => {
      const rowElem = document.createElement('div');
      rowElem.className = 'row';

      row.forEach((key) => {
        const keyObj = new Key(key, this.handleKey.bind(this));
        this.keys.push(keyObj);
        keyObj.render(rowElem);
      });

      this.parent.appendChild(rowElem);
    });
  }

  handleKey(key) {
    this.textarea.value += key;
  }

  click() {
    this.value = 1;
  }
}

export default { Keyboard };
