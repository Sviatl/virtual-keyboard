import Keyboard from './components/keyboard';

const myKeyboard = document.getElementById('keyboard');
const mytext = document.getElementById('text');
const keyb = new Keyboard(myKeyboard, mytext);
keyb.click();
