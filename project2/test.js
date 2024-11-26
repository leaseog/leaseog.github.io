document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("container");

    // Validate container
    if (!imageContainer) {
        console.error("Container element not found!");
        return;
    }

    // Images to show
    const images = [
        "./image/sticker1.png",
        "./image/sticker2.png",
        "./image/sticker3.png",
        "./image/sticker4.png",
        "./image/sticker5.png",
        "./image/sticker6.png",
        "./image/sticker7.png",
    ];

    const placedPositions = []; // Keep track of placed image positions

    // Function to check overlapping
    function isOverlapping(x, y, width, height) {
        for (const pos of placedPositions) {
            const isOverlap =
                x < pos.x + pos.width &&
                x + width > pos.x &&
                y < pos.y + pos.height &&
                y + height > pos.y;
            if (isOverlap) return true;
        }
        return false;
    }

    // Function to display a random image
    function displayRandomImage() {
        // Select a random image
        const randomIndex = Math.floor(Math.random() * images.length);
        const src = images[randomIndex];

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Random Image";
        img.style.display = "block"; // Make it visible
        img.style.position = "absolute";

        // Dynamically calculate image size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const imgWidth = viewportWidth * 0.2; // 20% of viewport width
        const imgHeight = imgWidth; // Assuming square images
        img.style.width = `${imgWidth}px`;
        img.style.height = `${imgHeight}px`;

        // Try placing the image without overlap
        let top, left;
        let maxAttempts = 100;
        do {
            top = Math.random() * (viewportHeight - imgHeight);
            left = Math.random() * (viewportWidth - imgWidth);
            maxAttempts--;
        } while (isOverlapping(left, top, imgWidth, imgHeight) && maxAttempts > 0);

        if (maxAttempts === 0) {
            console.warn("Could not find a suitable position for the image.");
            return;
        }

        // Set final position
        img.style.top = `${top}px`;
        img.style.left = `${left}px`;

        // Track the position to prevent overlapping
        placedPositions.push({ x: left, y: top, width: imgWidth, height: imgHeight });

        // Append image to the container
        imageContainer.appendChild(img);
        console.log(`Image added: ${src}`);
    }

    // Start the display process after 3 minutes
    setTimeout(() => {
        console.log("Starting to display images randomly every 5 seconds.");
        setInterval(displayRandomImage, 5000); // Show an image every 5 seconds
    }, 3 * 60 * 1000); // Wait for 3 minutes
});
