//let imageIndex = 0; // Initiate with 0

/**
 * Method called on click event of the generate button
 */
function generateQuote() {
    bgImageGenerator();
}

/**
 * Method to generate random images for background
 * @return {void}
 */
function bgImageGenerator() {
    let bgImageElement = document.querySelector('#bg-image');
    let bgImageUrl = ['assets/img/image1.jpeg', 'assets/img/image2.jpeg', 'assets/img/image3.jpeg', 'assets/img/image4.jpg', 'assets/img/image5.jpg', 'assets/img/image6.jpg', 'assets/img/image7.jpg', 'assets/img/image8.jpg'];

    let imageIndex = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    /*if (imageIndex < bgImageUrl.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }*/

    bgImageElement.setAttribute('style', `background-image: url(${bgImageUrl[imageIndex]})`);
}