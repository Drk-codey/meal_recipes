import { menuPage } from "./menu";

function homePage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="hero">
      <div class="heading">
        <h1> Experience the genuine taste of Nigeria's classic swallow dishes</h1>
        <p>Delightful and affordable cuisine</p>
        <div class="btn-container">
          <button id="orderBtn">Order Now</button>
        </div>
      </div>

      <div id="details">
        <div class="address">
          <span>
            <img src="./img/address.svg" alt="Address" class="icon">
          </span>
          <div class="detail-info">
            <p>123 Savory Street, Aromaland, Lagos, Nigeria</p>
          </div>
        </div>
        <div class="hours">
          <img src="./img/time1.svg" alt="Time" class="icon">
          <div class="detail-info">
            <p><span class="day">Mon-Thurs:</span>8am-8pm</p>
            <p><span class="day">Fri-Sun:</span>8am-11pm</p>
          </div>
        </div>
      </div>
    </section>
  `
  const orderBtn = document.getElementById('orderBtn');
  orderBtn.onclick = menuPage;

  return contentContainer;
}

// function setBtnActive(id) {
//   const activeBtn = document.querySelector('.tab.active');
//   if (activeBtn) activeBtn.classList.remove('active');

//   const homeBtn = document.getElementById(id);
//   homeBtn.classList.add('active');
// }

// Export function to use on other mudule
export { homePage };