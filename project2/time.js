document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("container");
  
    // Images to show
    const images = [
    //   { src: "image1.jpg", delay: 60 },    // 1 minute
    //   { src: "image2.jpg", delay: 300 },  // 5 minutes
    //   { src: "image3.jpg", delay: 600 }   // 10 minutes
      { src: "./image/img1.png", delay: 5 },    // 1 minute
      { src: "./image/img2.png", delay: 10 },  // 5 minutes
      { src: "./image/img3.png", delay: 15 }   // 10 minutes
    ];
  
    images.forEach(({ src, delay }) => {
      setTimeout(() => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Timed Image";
        img.style.display = "block"; // Make it visible
        img.style.top = `${Math.random() * 200}px`; // Random position
        img.style.left = `${Math.random() * 200}px`;
        imageContainer.appendChild(img);
      }, delay * 1000);
    });
  });
  