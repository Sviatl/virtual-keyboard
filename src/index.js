import Key from './components/key';

const listOfKeys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
];

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

const myKeyboard = document.getElementById('keyboard');
const mytext = document.getElementById('text');
const keyb = new Keyboard(myKeyboard, mytext);
keyb.click();
