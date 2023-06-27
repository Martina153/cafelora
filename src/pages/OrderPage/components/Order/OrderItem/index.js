export const OrderItem = (props) => {
    //musi tu byt takhle lebo posilam object 
    const {name, image} =props;

    const orderItem = document.createElement('div')
    orderItem.classList.add('order-item')

    orderItem.innerHTML = `<img src="${image}" class="order-item__image">
    <div class="order-item__name">
      ${name}
    </div>
  </div>`

return orderItem

}