import './style.css';
import Keyboard from './components/keyboard';

let notEnglish = localStorage.getItem('notEnglish');

const h1 = document.createElement('h1');
h1.innerHTML = 'RSS Виртуальная клавиатура';
document.body.appendChild(h1);

const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'text');
textarea.setAttribute('rows', '10');
document.body.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
document.body.appendChild(keyboard);

const keyb = new Keyboard(keyboard, textarea, notEnglish);

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  keyb.click(event.code);
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  keyb.unclick(event.code);
  if ((event.code === 'AltLeft' && event.ctrlKey) || (event.code === 'ControlLeft' && event.altKey)) {
    if (notEnglish) {
      notEnglish = false;
    } else {
      notEnglish = true;
    }
    keyb.notEnglish = notEnglish;
    localStorage.setItem('notEnglish', notEnglish);
    keyb.renderKeyboard();
  }
});

const div1 = document.createElement('div');
div1.innerHTML = 'Клавиатура создана в операционной системе Windows';
document.body.appendChild(div1);

const div2 = document.createElement('div');
div2.innerHTML = 'Для переключения языка нужно нажать: левый Ctrl + любой Alt или левый Alt + любой Ctrl';
document.body.appendChild(div2);
