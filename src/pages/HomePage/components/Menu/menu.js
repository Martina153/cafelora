import '/src/pages/HomePage/components/Menu/components/Drink/style.css';
import { Drink } from "/src/pages/HomePage/components/Menu/components/Drink/index.js";

export const Menu = () => {
  //const {drinks} = props;

    const menuElm = document.createElement('section')
    menuElm.classList.add('menu')
    menuElm.innerHTML = `<div class="container" id="menu">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
  </div>`;

  const drinkMenu = menuElm.querySelector('.menu-intro');
  //drinkMenu.appendChild(Drink());

  fetch('https://cafelora.kodim.app/api/me/drinks', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(response => response.json())
  .then(data => {
    const drinks = data.result; // Array of drinks
    drinks.map(drink => {
      const drinkComponent = Drink({
        drinkId: drink.id,
        name: drink.name,
        ordered: drink.ordered,
        image: drink.image
      });
      drinkMenu.appendChild(drinkComponent);
    });
  });
return menuElm;
}

