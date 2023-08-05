// Import the page-load module and call it
import { initializePage } from './page-load.js'
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

init();

function addNavEvents() {
  const homebtn = document.getElementById('home');
  const menubtn = document.getElementById('menu');
  const contactbtn = document.getElementById('contact');

  homebtn.addEventListener('click', homePage);
  menubtn.addEventListener('click', menuPage);
  contactbtn.addEventListener('click', contactPage);
}

// Display Navbar when hambumger is toggled
function toggleHamburger() {
  const hamburgerbtn = document.getElementById('hamburger');
  const navContainer = document.getElementById('navContainer');

  console.log(navContainer);
  hamburgerbtn.addEventListener('click', function() {
    navContainer.classList.toggle("change");
    hamburgerbtn.classList.toggle("change");
  });
}


function init() {
  initializePage();
  homePage();
  // menuPage();
  // contactPage();
  addNavEvents();
  toggleHamburger()
}