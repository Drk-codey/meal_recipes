function menuPage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="menu">
      <div class="hero">
        <h1>Menu</h1>
        <img src="./img/chef.svg" alt="Chef" class="icon" />
      </div>
    
      <div class="menu-container">
        <h1 class="menu-type">Appetizer</h1>
        <div class="meals">
          <div class="meal-box">
            <h3>Chin Chin</h3>
            <p>Crispy, sweet fried dough snacks</p>
          </div>
          <div class="meal-box">
            <h3>Puff Puff</h3>
            <p>Fluffy Deep-fried flour dough</p>
          </div>
          <div class="meal-box">
            <h3>Suya</h3>
            <p>Grilled spicy meat skewers</p>
          </div>
        </div>
        
        <h1 class="menu-type">Soups</h1>
        <div class="meals">
          <div class="meal-box">
            <h3> Egusi Soup</h3>
            <p>Ground melon seeds, spinach, and choice of meat or fish</p>
          </div>
          <div class="meal-box">
            <h3>Efo Soup</h3>
            <p>Savory soup with vegetables, stockfish, and dried fish</p>
          </div>
          <div class="meal-box">
            <h3>Ogbono Soup</h3>
            <p>Hearty soup with ground ogbono seeds and assorted meat or fish</p>
          </div>
        </div>
        
        <h1 class="menu-type">Swallow Dishes</h1>
        <div class="meals">
          <div class="meal-box">
            <h3>Pounded Yam</h3>
            <p>Smooth and stretchy yam served with soup</p>
          </div>
          <div class="meal-box">
            <h3>Fufu</h3>
            <p> Fluffy swallow made from cassava or yam</p>
          </div>
          <div class="meal-box">
            <h3>Amala</h3>
            <p>Dark swallow made from yam flour</p>
          </div>
        </div>
        
        <h1 class="menu-type">Drinks</h1>
        <div class="meals">
          <div class="meal-box">
            <h3>Chapman</h3>
            <p>Refreshing non-alcoholic cocktail with grenadine</p>
          </div>
          <div class="meal-box">
            <h3>Zobo</h3>
            <p>Hibiscus-infused drink with a hint of ginger and spices</p>
          </div>
          <div class="meal-box">
            <h3>Palmwine</h3>
            <p>Traditional drink made from fermented palm sap</p>
          </div>
        </div>
      </div>
    </section>
  `

  return contentContainer;
}

// Export function to use on other mudule
export { menuPage };