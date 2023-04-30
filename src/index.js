import './style.css';
import Keyboard from './components/keyboard';

const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'text');
// textarea.setAttribute('cols', '30');
textarea.setAttribute('rows', '20');
document.body.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');
document.body.appendChild(keyboard);

const keyb = new Keyboard(keyboard, textarea);
keyb.click();
