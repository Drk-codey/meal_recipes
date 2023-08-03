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
        <!-- <div class="addressIcon">
          <img src="/dist/img/address-svgrepo-com.svg" alt="">
        </div> --!>
        <div class="address">
          <p>123 Savory Street, Aromaland, Lagos,Nigeria</p>
        </div>
        <div class="hours">
          <!-- <div class="timeIcon">
            <img src="/dist/img/chef-svgrepo-com.svg" alt="">
          </div> -->
          <p><span class="day">Mon-Thurs:</span>8am-8pm</p>
          <p><span class="day">Fri-Sun:</span>8am-11pm</p>
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