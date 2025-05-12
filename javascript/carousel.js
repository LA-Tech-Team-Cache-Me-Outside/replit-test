// wait for dom content to load before rendering images
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const DEFAULT_ROTATION_INTERVAL_IN_MS = 2000;
    const carouselImage = document.getElementById("carousel-image")
    const images = [
        "images/Experience-slide-one.jpg", 
        "images/Experience-slide-two.jpg", 
        "images/Experience-slide-three.jpg"
    ]


    /**
     * @description Cycles the current image on the carosel, and peforms logic to determine if next index will be out of bounds
     * @returns {void}
     */
    function cycleImage() {
        carouselImage.src = images[currentIndex]
        if (currentIndex + 1 === images.length) {
            currentIndex = 0
        } else {
            currentIndex += 1
        }
    }

    cycleImage()
    setInterval(cycleImage, DEFAULT_ROTATION_INTERVAL_IN_MS)
})