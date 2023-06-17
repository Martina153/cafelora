import './style.css';
import './components/Banner/banner.css';
import './components/Menu/menu.css';
import './components/Gallery/gallery.css';
import './components/Contact/contact.css';
import './components/Header/header.css';
import './components/Footer/footer.css';
import {Banner} from './components/Banner/banner.js';
import {Menu} from './components/Menu/menu.js';
import {Gallery} from './components/Gallery/gallery.js';
import {Contact} from './components/Contact/contact.js';
import {Header} from './components/Header/header.js';
import {Footer} from './components/Footer/footer.js';



console.log('funguju!');
const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);