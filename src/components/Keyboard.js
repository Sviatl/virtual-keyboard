import Key from './key';

const listOfKeys = [
  [{ key: '`' },
    { key: '1', upkey: '!' },
    { key: '2', upkey: '@' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '0' },
    { key: '-' },
    { key: '+' },
    { key: 'Backspace', grow: true }],
  [{ key: 'Tab', grow: true },
    { key: 'q' },
    { key: 'w' },
    { key: 'e' },
    { key: 'r' },
    { key: 't' },
    { key: 'y' },
    { key: 'u' },
    { key: 'i' },
    { key: 'o' },
    { key: 'p' },
    { key: '[' },
    { key: ']' },
    { key: '\\' },
    { key: 'Del' }],
  [{ key: 'Capslock', grow: true },
    { key: 'a' },
    { key: 's' },
    { key: 'd' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
    { key: ';' },
    { key: '\'' },
    { key: 'Enter', grow: true }],
  [{ key: 'Shift', grow2: true },
    { key: 'z' },
    { key: 'x' },
    { key: 'c' },
    { key: 'v' },
    { key: 'b' },
    { key: 'n' },
    { key: 'm' },
    { key: ',' },
    { key: '.' },
    { key: '/' },
    { key: '▲' },
    { key: 'Shift', grow: true }],
  [{ key: 'Ctrl' },
    { key: 'Win' },
    { key: 'Alt' },
    { key: 'Space', grow: true },
    { key: 'Alt' },
    { key: '◄' },
    { key: '▼' },
    { key: '▼' },
    { key: 'Crtl' }],
];

export default class Keyboard {
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
