//let imageIndex = 0; // Initiate with 0

/**
 * Method called on click event of the generate button
 */
function generateQuote() {
    bgImageGenerator();
}

/**
 * Method to generate Random number based on max and min
 * @param maxValue
 * @param minValue
 * @returns {number}
 */
function generateRandomNumber(maxValue, minValue) {
    try {
        if (typeof maxValue === "number" && typeof minValue === "number" && maxValue > minValue) {
            return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
        } else {
            throw "Invalid parameter provided";
        }
    } catch (e) {
        console.error(e);
    }
}

/**
 * Method to generate random images for background
 * @return {void}
 */
function bgImageGenerator() {
    let bgImageElement = document.querySelector('#bg-image');
    let bgImageUrl = ['assets/img/image1.jpeg', 'assets/img/image2.jpeg', 'assets/img/image3.jpeg', 'assets/img/image4.jpg', 'assets/img/image5.jpg', 'assets/img/image6.jpg', 'assets/img/image7.jpg', 'assets/img/image8.jpg'];
    let imageIndex = generateRandomNumber(bgImageUrl.length - 1, 0);
    bgImageElement.setAttribute('style', `background-image: url(${bgImageUrl[imageIndex]})`);
}


