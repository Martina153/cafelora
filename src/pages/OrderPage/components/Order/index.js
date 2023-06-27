import { OrderItem } from "./OrderItem/index.js";

export const Order = () => {

    const order = document.createElement('div');
    order.classList.add('order__content', 'container')

    order.innerHTML =
   `<h1>Vaše objedávnka</h1>
    <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
    <div class="order__items">
     
   </div>`

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
          const orderedDrinks = drinks.filter(drink => drink.ordered);
          console.log(orderedDrinks)
          const orderItems = order.querySelector('.order__items');
          orderedDrinks.map(item => {
          const itemComponent = OrderItem({
          name: item.name,
          image: item.image
        });
        orderItems.appendChild(itemComponent);
      });
    });

return order;
}