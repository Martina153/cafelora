import './style.css';
/*import {Banner} from './components/Banner/banner.js';
import {Menu} from './components/Menu/menu.js';
import {Gallery} from './components/Gallery/gallery.js';
import {Contact} from './components/Contact/contact.js';
import {Header} from './components/Header/header.js';
import {Footer} from './components/Footer/footer.js';*/
import './pages/HomePage/components/Banner/banner.css';
import './pages/HomePage/components/Menu/menu.css';
import './pages/HomePage/components/Gallery/gallery.css';
import './pages/HomePage/components/Contact/contact.css';
import './pages/OrderPage/index.css';


import {HomePage} from './pages/HomePage/index.js';
import { OrderPage } from './pages/OrderPage/index.js';



console.log('funguju!');
/*const pageElement = document.createElement('div');
pageElement.classList.add('page');*/

/*const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());*/

//pageElement.append(Header(), main, Footer());


//document.querySelector('#app').append(HomePage());

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
} else if(pathname === '/objednavka') {
    document.querySelector('#app').append(OrderPage());
}
