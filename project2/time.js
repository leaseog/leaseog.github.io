document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("container");
  
    // Images to show
    const images = [
      { src: "./image/sticker1.png", delay: 360 },    // 6m
      { src: "./image/sticker2.png", delay: 420 },  // 7m
      { src: "./image/sticker3.png", delay: 480 },   // 8m
      { src: "./image/sticker4.png", delay: 540 },   // 9m
      { src: "./image/sticker5.png", delay: 600 },   // 10m
      { src: "./image/sticker6.png", delay: 660 },   // 11m
      { src: "./image/sticker7.png", delay: 720 },   // 12m 
      { src: "./image/sticker6.png", delay: 780 },   // 13m  
      { src: "./image/sticker1.png", delay: 840 },   // 14m 
      { src: "./image/sticker3.png", delay: 900 },   // 15m 
      { src: "./image/sticker2.png", delay: 960 },   // 16m 
      { src: "./image/sticker6.png", delay: 1020 },   // 17m 
      { src: "./image/sticker4.png", delay: 1080 },   // 18m
      { src: "./image/sticker5.png", delay: 1140 },   // 19m 
      { src: "./image/timeout.png", delay: 1200 },   // 20m
    ];

    const headerHeight = 90; // Height of the header in pixels
    const placedPositions = []; // To store the positions of placed images

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
  
    images.forEach(({ src, delay }) => {
      setTimeout(() => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Timed Image";
        // img.style.width = "1000px";  // or any desired width
        // img.style.height = "1200px";  // keep aspect ratio
        img.style.display = "block"; // Make it visible
        img.style.position = "absolute";

        // Position the image within the viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const imgWidth = viewportWidth * 0.2; // 50% of the viewport width
        const imgHeight = imgWidth; // Maintain aspect ratio
        img.style.width = `${300}px`;
        // img.style.height = `${auto}px`;

          // Generate position without overlapping
          let top, left;
          let maxAttempts = 100; // Avoid infinite loops
          do {
            top = Math.random() * (window.innerHeight - imgHeight - headerHeight) + headerHeight;
            left = Math.random() * (window.innerWidth - imgWidth);
            maxAttempts--;
          } while (isOverlapping(left, top, imgWidth, imgHeight) && maxAttempts > 0);

          if (maxAttempts === 0) {
            console.warn("Could not place image without overlap after many attempts.");
            return;
          }

          // Set the final position
          img.style.top = `${top}px`;
          img.style.left = `${left}px`;

          // Add the position to the placedPositions array
          placedPositions.push({ x: left, y: top, width: imgWidth, height: imgHeight });


        imageContainer.appendChild(img);
      }, delay * 1000);
    });
  });
  