import {greeting} from './module1.js';

document.querySelector('button').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    document.querySelector('#placeholder').innerText = greeting(name);
});