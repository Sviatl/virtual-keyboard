import Key from './key';

const listOfKeys = [
  [{
    key: '`', upkey: '~', keyLang: 'ё', code: 'Backquote',
  },
  {
    key: '1', upkey: '!', upkeyLang: '!', code: 'Digit1',
  },
  {
    key: '2', upkey: '@', upkeyLang: '"', code: 'Digit2',
  },
  {
    key: '3', upkey: '#', upkeyLang: '№', code: 'Digit3',
  },
  {
    key: '4', upkey: '$', upkeyLang: ';', code: 'Digit4',
  },
  {
    key: '5', upkey: '%', upkeyLang: '%', code: 'Digit5',
  },
  {
    key: '6', upkey: '^', upkeyLang: ':', code: 'Digit6',
  },
  {
    key: '7', upkey: '&', upkeyLang: '?', code: 'Digit7',
  },
  {
    key: '8', upkey: '*', upkeyLang: '*', code: 'Digit8',
  },
  {
    key: '9', upkey: '(', upkeyLang: '(', code: 'Digit9',
  },
  {
    key: '0', upkey: ')', upkeyLang: ')', code: 'Digit0',
  },
  {
    key: '-', upkey: '_', upkeyLang: '_', code: 'Minus',
  },
  {
    key: '=', upkey: '+', upkeyLang: '+', code: 'Equal',
  },
  {
    key: 'Backspace', upkey: 'Backspace', grow: true, isSpecial: true, code: 'Backspace',
  }],
  [{
    key: 'Tab', upkey: 'Tab', grow: true, isSpecial: true, code: 'Tab',
  },
  { key: 'q', keyLang: 'й', code: 'KeyQ' },
  { key: 'w', keyLang: 'ц', code: 'KeyW' },
  { key: 'e', keyLang: 'у', code: 'KeyE' },
  { key: 'r', keyLang: 'к', code: 'KeyR' },
  { key: 't', keyLang: 'е', code: 'KeyT' },
  { key: 'y', keyLang: 'н', code: 'KeyY' },
  { key: 'u', keyLang: 'г', code: 'KeyU' },
  { key: 'i', keyLang: 'ш', code: 'KeyI' },
  { key: 'o', keyLang: 'щ', code: 'KeyO' },
  { key: 'p', keyLang: 'з', code: 'KeyP' },
  {
    key: '[', upkey: '{', keyLang: 'х', code: 'BracketLeft',
  },
  {
    key: ']', upkey: '}', keyLang: 'ъ', code: 'BracketRight',
  },
  {
    key: '\\', upkey: '|', keyLang: '\\', upkeyLang: '/', code: 'Backslash',
  },
  {
    key: 'Del', upkey: 'Del', isSpecial: true, code: 'Delete',
  }],
  [{
    key: 'Capslock', upkey: 'Capslock', grow: true, isSpecial: true, code: 'CapsLock',
  },
  { key: 'a', keyLang: 'ф', code: 'KeyA' },
  { key: 's', keyLang: 'ы', code: 'KeyS' },
  { key: 'd', keyLang: 'в', code: 'KeyD' },
  { key: 'f', keyLang: 'а', code: 'KeyF' },
  { key: 'g', keyLang: 'п', code: 'KeyG' },
  { key: 'h', keyLang: 'р', code: 'KeyH' },
  { key: 'j', keyLang: 'о', code: 'KeyJ' },
  { key: 'k', keyLang: 'л', code: 'KeyK' },
  { key: 'l', keyLang: 'д', code: 'KeyL' },
  {
    key: ';', upkey: ':', keyLang: 'ж', code: 'Semicolon',
  },
  {
    key: '\'', upkey: '"', keyLang: 'э', code: 'Quote',
  },
  {
    key: 'Enter', upkey: 'Enter', grow: true, isSpecial: true, code: 'Enter',
  }],
  [{
    key: 'Shift', upkey: 'Shift', grow2: true, code: 'ShiftLeft', isFunctional: true,
  },
  { key: 'z', keyLang: 'я', code: 'KeyZ' },
  { key: 'x', keyLang: 'ч', code: 'KeyX' },
  { key: 'c', keyLang: 'с', code: 'KeyC' },
  { key: 'v', keyLang: 'м', code: 'KeyV' },
  { key: 'b', keyLang: 'и', code: 'KeyB' },
  { key: 'n', keyLang: 'т', code: 'KeyN' },
  { key: 'm', keyLang: 'ь', code: 'KeyM' },
  {
    key: ',', upkey: '<', keyLang: 'б', code: 'Comma',
  },
  {
    key: '.', upkey: '>', keyLang: 'ю', code: 'Period',
  },
  {
    key: '/', upkey: '?', keyLang: '.', upkeyLang: ',', code: 'Slash',
  },
  { key: '▲', code: 'ArrowUp', isArrow: true },
  {
    key: 'Shift', upkey: 'Shift', grow: true, code: 'ShiftRight', isFunctional: true,
  }],
  [{
    key: 'Ctrl', upkey: 'Ctrl', code: 'ControlLeft', isFunctional: true,
  },
  {
    key: 'Win', upkey: 'Win', code: 'MetaLeft', isFunctional: true,
  },
  {
    key: 'Alt', upkey: 'Alt', code: 'AltLeft', isFunctional: true,
  },
  { key: 'Space', grow: true, code: 'Space' },
  {
    key: 'Alt', upkey: 'Alt', code: 'AltRight', isFunctional: true,
  },
  { key: '◄', code: 'ArrowLeft', isArrow: true },
  { key: '▼', code: 'ArrowDown', isArrow: true },
  { key: '►', code: 'ArrowRight', isArrow: true },
  {
    key: 'Ctrl', upkey: 'Ctrl', code: 'ControlRight', isFunctional: true,
  }],
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
    this.textarea.focus();
  }

  handleKey(key) {
    let currentSymbol = key.element.textContent;
    if (currentSymbol === 'Space') {
      currentSymbol = ' ';
    }
    const { selectionStart } = this.textarea;
    if (key.isFunctional) {
      this.resetRestOtherFunctional(key.code);
      if (key.code === 'ShiftLeft' || key.code === 'ShiftRight') {
        if (this.shift) {
          this.shift = false;
          key.pressed(false);
        } else {
          this.shift = true;
          key.pressed(true);
        }
        this.renderKeyboard();
      }
    } else {
      const chars = this.textarea.value.split('');
      chars.splice(selectionStart, 0, currentSymbol);
      this.textarea.value = chars.join('');
      this.textarea.setSelectionRange(selectionStart + 1, selectionStart + 1);
      this.textarea.focus();
      this.resetRestOtherFunctional(key.code);
      if (this.shift) {
        this.shift = false;
        this.renderKeyboard();
      }
    }
  }

  resetRestOtherFunctional(code) {
    const resultKeys = this.keys.filter((obj) => obj.isFunctional === true && obj.code !== code);
    resultKeys.forEach((key) => {
      const currentKey = key;
      currentKey.pressed(false);
    });
  }

  renderKeyboard() {
    this.keys.forEach((key) => {
      const currentKey = key;
      currentKey.change(this.shift);
    });
  }

  click(code) {
    // this.value = code;
    const resultKey = this.keys.find((obj) => obj.code === code);
    if (resultKey !== undefined) {
      resultKey.click();
    }
  }
}
