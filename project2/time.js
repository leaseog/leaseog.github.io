document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("container");
  
    // Images to show
    const images = [
      { src: "./image/sticker1.png", delay: 15 },    // 30s
      { src: "./image/sticker2.png", delay: 20 },  // 1m
      { src: "./image/sticker3.png", delay: 25 },   // 1m 30s
      { src: "./image/sticker4.png", delay: 30 },   // 2m
      { src: "./image/sticker5.png", delay: 35 },   // 2m 30s
      { src: "./image/sticker6.png", delay: 40 },   // 3m
      { src: "./image/sticker7.png", delay: 45 },   // 3m 30s 
      { src: "./image/sticker6.png", delay: 50 },   // 4m  
      { src: "./image/sticker1.png", delay: 55 },   // 4m 30s 
      { src: "./image/sticker3.png", delay: 60 },   // 5m 
      { src: "./image/sticker2.png", delay: 65 },   // 5m 30s 
      { src: "./image/sticker6.png", delay: 75 },   // 6m 
      { src: "./image/sticker4.png", delay: 80 },   // 6m 30s 
      { src: "./image/sticker5.png", delay: 850 },   // 7m 
      { src: "./image/timeout.png", delay: 90 },   // 7m
    ];

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
            top = Math.random() * (window.innerHeight - imgHeight);
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
  