// Import the page-load module and call it
import { initializePage } from './page-load.js'
import { homePage } from './modules/home.js';
import { menuPage } from './menu.js';
import { contactPage } from './modules/contact.js';

init();

function addNavEvents() {
  const homebtn = document.getElementById('home');
  const menubtn = document.getElementById('menu');
  const contactbtn = document.getElementById('contact');

  homebtn.addEventListener('click', homePage);
  menubtn.addEventListener('click', menuPage);
  contactbtn.addEventListener('click', contactPage);
}



function init() {
  initializePage();
  // homePage();
  // menuPage()
  contactPage();
  addNavEvents();
}