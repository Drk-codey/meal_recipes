function homePage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="hero">
      <h1> Experience the genuine taste of Nigeria's classic swallow dishes</h1>
      <p>Immerse yourself in the delightful world of Nigerian cuisine</p>
    </section>
  `

  return contentContainer;
}

// Export function to use on other mudule
export { homePage };