export const Header = (showMenu) => {
  const headerElm = document.createElement('header')
  headerElm.classList.add('header')

    if (!showMenu) {
    headerElm.innerHTML = `<div class="header__content container" id="home">
    <div class="site-logo"></div>

    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#banner">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>
  </div>`;

    headerElm.querySelector('.nav-btn').addEventListener('click', () => {
    const element = headerElm.querySelector('.rollout-nav')
    if (element.style.display === 'block') 
    {element.style.display = 'none'} else {element.style.display = 'block'}
  });

  headerElm.querySelector('.rollout-nav').addEventListener('click', () => {
    const element = headerElm.querySelector('.rollout-nav')
    if (element.style.display === 'block') 
    {element.style.display = 'none'} else {element.style.display = 'block'}
  });

  return headerElm;

    } else {
      headerElm.innerHTML = `<div class="header__content container">
      <div class="site-logo"></div>

      <nav class="inline-nav">
        <a href="/">Hlavní stránka</a>
      </nav>

    </div>`;

    return headerElm;

    }
    /*const headerElm = document.createElement('header')
    headerElm.classList.add('header')
    headerElm.innerHTML = `<div class="header__content container" id="home">
    <div class="site-logo"></div>

    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#banner">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>
  </div>`;

  headerElm.querySelector('.nav-btn').addEventListener('click', () => {
    const element = headerElm.querySelector('.rollout-nav')
    if (element.style.display === 'block') 
    {element.style.display = 'none'} else {element.style.display = 'block'}
  });

  headerElm.querySelector('.rollout-nav').addEventListener('click', () => {
    const element = headerElm.querySelector('.rollout-nav')
    if (element.style.display === 'block') 
    {element.style.display = 'none'} else {element.style.display = 'block'}
  });*/


}