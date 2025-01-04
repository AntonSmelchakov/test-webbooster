import '/node_modules/modern-normalize/modern-normalize.css'
import '/src/style.css'

import createHeader from './components/header'
import createGreetPanel from './components/greetPanel';
import createWhyPanel from './components/whyPanel';
import createSuppPanel from './components/suppPanel';

const header = document.querySelector('header');
createHeader(header);

const main = document.querySelector('main');
createGreetPanel(main);
createWhyPanel(main);
createSuppPanel(main);