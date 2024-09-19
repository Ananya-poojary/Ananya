document.addEventListener('DOMContentLoaded', function() {
    const flowerBtn = document.getElementById('flowerBtn');
    const flowerDisplay = document.getElementById('flowerDisplay');

    flowerBtn.addEventListener('click', function() {
        // Fetching a random flower image from Lorem Picsum
        // Note: Lorem Picsum does not have flower-specific queries, but provides random images
        const randomImageNumber = Math.floor(Math.random() * 1000); // Random number for image

        fetch(`https://picsum.photos/id/${randomImageNumber}/400/300`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                // Directly use the image URL in the response headers
                flowerDisplay.innerHTML = `<img src="https://picsum.photos/id/${randomImageNumber}/400/300" alt="Random Flower">`;
            })
            .catch(error => {
                flowerDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching flower image:', error);
            });
    });
});
