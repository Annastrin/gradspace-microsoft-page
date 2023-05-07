window.onload = () => {
  const toggleCarouselAutoplayBtn = document.getElementById(
    "carousel-toggle-autoplay"
  )

  const bannerCarousel = document.getElementById("carouselProductBanner")
  const carousel = bootstrap.Carousel.getInstance(bannerCarousel)

  toggleCarouselAutoplayBtn.onclick = () => {
    const carouselState = bannerCarousel.getAttribute("data-bs-ride")
    console.log(carousel)

    if (carouselState === "carousel") {
      bannerCarousel.setAttribute("data-bs-ride", "false")
      carousel.pause()
      toggleCarouselAutoplayBtn.classList.replace("playing", "stopped")
    } else {
      bannerCarousel.setAttribute("data-bs-ride", "carousel")
      carousel.cycle()
      toggleCarouselAutoplayBtn.classList.replace("stopped", "playing")
    }
  }
}
