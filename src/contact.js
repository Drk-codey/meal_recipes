function contactPage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="contact">
      <div class="hero">
        <h1>Contact Us<h1>
      </div>
      
      <div class="contact-container">
        <div id="cntDetail">
          <div>
            <span>
              <img src="./img/address.svg" alt="" class="icon">
            </span>
            <p>123 Savory Street, Aromaland, Lagos, Nigeria</p>
          </div>
          <div>
            <span>
              <img src="./img/time1.svg" alt="" class="icon">
            </span>
            <p id="break">
              <span><span class="day">Mon-Thurs:</span>8am-8pm</span>
              <span><span class="day">Fri-Sun:</span>8am-11pm</span>
            </p>
          </div>
          <div>
            <span>
            <img src="./img/phone.svg" alt="" class="icon">
            </span>
            <p>08059997903</p>
          </div>
          <div>
            <span>
              <img src="./img/mail.svg" alt="" class="icon">
            </span>
            <p>perfectlyRealEmail@notFake.com</p>
          </div>
        </div>
        <form action="">
          <h3>Message Us</h3>
          <input type="text" name="" id="name" placeholder="Full name">
          <input type="email" name="" id="email" placeholder="Email">
          <Textarea id="message" rows="5" cols="20" placeholder="Type Your message..."></Textarea>
          <button id="mssgBtn">Send</button>
        </form>
      </div>
    </section>
  `

  return contentContainer;
}

// Export function to use on other mudule
export { contactPage };