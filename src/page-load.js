function createHeader(id, text) {
  const header = document.createElement("header");
  header.setAttribute("id", id);

  const rtnName = document.createElement('h1');
  rtnName.textContent = text;
  header.appendChild(rtnName);

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

function createNavLink() {
  const nav = document.createElement('nav');
  const navLink = document.createElement('ul');
  nav.setAttribute('id', 'nav');

  const homebtn = createlink('home', 'Home');
  const menubtn = createlink('menu', 'Menu');
  const contact = createlink('contact', 'Contact');

  navLink.appendChild(homebtn);
  navLink.appendChild(menubtn);
  navLink.appendChild(contact);

  nav.appendChild(navLink);

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
  const header = createHeader('header', "elege")
  content.appendChild(header);

  // Append contentcontainer to Page
  const tabcontent = createMain();
  content.appendChild(tabcontent);

  return content;
}

// Export function to be used in another module
export { initializePage };