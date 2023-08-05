function createHeader(id) {
  const header = document.createElement("header");
  header.setAttribute("id", id);

  // Append navlink into header
  const navbar = createNavLink();
  header.appendChild(navbar);

return header;
}

function createlink(id, text) {
  const link = document.createElement('li');
  link.setAttribute('id', id);
  link.innerHTML = text;
  return link;
}

function createHamBurger() {
  const hamburger = document.createElement('div');
  hamburger.setAttribute("id", "hamburger")
  
  // Add 3 lines to the hamburger menu 
  hamburger.insertAdjacentHTML("beforeend", `
    <div class="line" id="line1"></div>
    <div class="line" id="line2"></div>
    <div class="line" id="line3"></div>
  `);

  return hamburger
}

function createNavLink() {
  const nav = document.createElement('nav');
  const navLink = document.createElement('ul');
  const navContainer = document.createElement('div');
  nav.setAttribute('id', 'nav');
  navLink.setAttribute('id', "navLinks")
  navContainer.setAttribute('id', "navContainer")

  // Header Logo
  const rtnName = document.createElement('h1');
  rtnName.textContent = "elege";
  nav.appendChild(rtnName);
  
  const homebtn = createlink('home', 'Home');
  const menubtn = createlink('menu', 'Menu');
  const contact = createlink('contact', 'Contact');
  const hamburger = createHamBurger();

  navLink.appendChild(homebtn);
  navLink.appendChild(menubtn);
  navLink.appendChild(contact);
  
  navContainer.appendChild(navLink);
  nav.appendChild(navContainer);
  nav.appendChild(hamburger);

  return nav;
}

function createMain() {
  const contentCont = document.createElement("div");
  contentCont.innerHTML = "";
  contentCont.setAttribute('id', "contentContainer")
  return contentCont;
}

function initializePage() {
  // Create elements inside body
  const content = document.getElementById('content');

  // Append element to page
  const header = createHeader('header')
  content.appendChild(header);

  // Append contentcontainer to Page
  const tabcontent = createMain();
  content.appendChild(tabcontent);

  return content;
}

// Export function to be used in another module
export { initializePage };