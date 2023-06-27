import { Layer } from "/src/pages/HomePage/components/Menu/components/Drink/Layer/index.js";
import '/src/pages/HomePage/components/Menu/components/Drink/Layer/style.css';

export const Drink = (props) => {
    const { drinkId, name, ordered, image} = props;

let textOrder ='';  

if (ordered) {
  textOrder = "Objednat";
} else {
  textOrder = "Zrušit";
}

    const drinkElm = document.createElement('div')
    drinkElm.classList.add('drinks-list')
    drinkElm.innerHTML = `
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="${image}">
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
     
      </div>
      <div class="drink__controls">
        <button class="order-btn">
        ${textOrder}
        </button>
      </div>
    </div>
  </div>

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a></div>`

    const layerInfo = drinkElm.querySelector('.drink__info');
    layerInfo.appendChild(Layer())
    const button = drinkElm.querySelector('.order-btn')
    if (textOrder ==='Objednat') {
      button.classList.add('order-btn--ordered')
    }

    button.addEventListener('click', ()=>{
      console.log(drinkId)
      const newOrderedState = !ordered; 

    fetch(`https://cafelora.kodim.app/api/me/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        ordered: newOrderedState
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      drinkElm.replaceWith(Drink({
        drinkId: drinkId,
        name: name,
        ordered: ordered,
        image: image,
      }))
    })

    })

  return drinkElm

}

/*
let drinks = 'loading';
    if (drinks === 'loading') {
      fetch('https://cafelora.kodim.app/api/me/drinks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('vas-app-token')}`
        },
        body: JSON.stringify({
          id: id, 
          name: name, 
          ordered: ordered,
          image: image,
          layers: [
            {
              color: color,
              label: label,
            }]
        })
      })
    .then(response => response.json())
    .then(data => {console.log(data)})}

/*   <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="https://cafelora.kodim.app/assets/cups/doppio.png">
        </div>
        <div class="drink__info">
          <h3>Doppio</h3>
          <div class="layer">
            <div class="layer__color" style="background-color: #613916"></div>
            <div class="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
          Objednat
        </button>
      </div>
    </div>

    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="https://cafelora.kodim.app/assets/cups/lungo.png">
        </div>
        <div class="drink__info">
          <h3>Lungo</h3>
          <div class="layer">
            <div class="layer__color" style="background-color: #b0dee1"></div>
            <div class="layer__label">voda</div>
          </div>
          <div class="layer">
            <div class="layer__color" style="background-color: #613916"></div>
            <div class="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
          Objednat
        </button>
      </div>
    </div>*/