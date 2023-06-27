import {Banner} from '/src/pages/HomePage/components/Banner/banner.js';
import {Menu} from '/src/pages/HomePage/components/Menu/menu.js';
import {Gallery} from '/src/pages/HomePage/components/Gallery/gallery.js';
import {Contact} from '/src/pages/HomePage/components/Contact/contact.js';
import {Header} from '/src/components/Header/header.js';
import {Footer} from '/src/components/Footer/footer.js';
import '/src/components/Header/header.css';
import '/src/components/Footer/footer.css';

export const HomePage = () => {

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());
pageElement.append(Header(), main, Footer());

return pageElement;
}