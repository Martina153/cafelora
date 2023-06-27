import { Header } from "../../components/Header/header.js"
import {Footer} from "../../components/Footer/footer.js"
import {Order} from "./components/Order/index.js"

export const OrderPage = () => {

    const pageElement = document.createElement('div');
    pageElement.classList.add('page'); 
    const main = document.createElement('main');
    main.append(Order())
    pageElement.append(Header(true), main, Footer());

    return pageElement;
}
