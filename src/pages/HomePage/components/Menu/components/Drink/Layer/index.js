export const Layer = () => {
    //const {color, label} = props;
    const layer = document.createElement('div');
    layer.classList.add('layer');
    layer.innerHTML = `
    <div class="layer__color" style="background-color: #613916"></div>
    <div class="layer__label">espresso</div>`;

    return layer;
}