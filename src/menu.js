function menuPage() {
  const contentContainer = document.getElementById("contentContainer");

  contentContainer.innerHTML = `
    <section id="hero">
      
    </section>
  `

  return contentContainer;
}

// Export function to use on other mudule
export { menuPage };