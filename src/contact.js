function contactPage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="contact">
      <div class="hero">
        <h1>Contact Us<h1>
      </div>
      
      <div class="contact-container">
        <div id="cntDetail">
          <p>
            <span>
              <img src="./img/address.svg" alt="" class="icon">
            </span>
            123 Savory Street, Aromaland, Lagos, Nigeria
          </p>
          <div>
            <span>
              <img src="./img/time.svg" alt="" class="icon">
            </span>
            <p><span class="day">Mon-Thurs:</span>8am-8pm</p>
            <p><span class="day">Fri-Sun:</span>8am-11pm</p>
          </div>
          <p>
            <span>
            <img src="./img/time.svg" alt="" class="icon">
            </span>
            08059997903
          </p>
          <p>
            <span>
              <img src="./img/time.svg" alt="" class="icon">
            </span>
            perfectlyRealEmail@notFake.com
          </p>
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