document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("container");

    // Validate the container
    if (!imageContainer) {
        console.error("Container element not found!");
        return;
    }

    // Images to show
    const images = [
        "./image/timeout.png", // You can change this to your desired image
    ];

    // Function to display the image at the center
    function displayCenteredImage() {
        console.log("Attempting to display the image in the center of the container");

        const src = images[0]; // Use the first image or randomize if needed

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Centered Image";
        img.style.position = "absolute";

        // Make the image fit the size of the container
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain"; // Ensure the image retains its aspect ratio
        img.style.top = "0";
        img.style.left = "0";

        // Append image to the container
        imageContainer.appendChild(img);
        console.log(`Image added: ${src}`);
    }

    // Show the image after 10 minutes
    setTimeout(() => {
        console.log("10 minutes passed. Showing the centered image...");
        displayCenteredImage();
    }, 10 * 60 * 1000); // 10 minutes in milliseconds
});
