function contactPage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="contact">
      <div class="hero">
        <h1>Contact Us<h1>
      </div>
      
      <div class="contact-container">
        <div id="cntDetail">
          <p>123 Savory Street, Aromaland, Lagos, Nigeria</p>
          <p><span class="day">Mon-Thurs:</span>8am-8pm</p>
          <p><span class="day">Fri-Sun</span>8am-11pm</p>
          <p>08059997903</p>

        </div>
        <form action="">
          <h3>Message Us</h3>
          <input type="text" name="" id="" placeholder="Full name">
          <input type="email" name="" id="" placeholder="Email">
          <Textarea>Type Your message...</Textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  `

  return contentContainer;
}

// Export function to use on other mudule
export { contactPage };