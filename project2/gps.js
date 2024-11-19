// document.addEventListener("DOMContentLoaded", () => {
//     const imageContainer = document.getElementById("image-container");
  
//     // Check if Geolocation API is available
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
  
//           // Display GPS location
//           const gpsInfo = document.createElement("p");
//           gpsInfo.textContent = `Your location: Latitude ${latitude.toFixed(
//             4
//           )}, Longitude ${longitude.toFixed(4)}`;
//           gpsInfo.style.position = "absolute";
//           gpsInfo.style.bottom = "10px";
//           gpsInfo.style.left = "10px";
//           gpsInfo.style.fontSize = "14px";
//           gpsInfo.style.background = "rgba(255, 255, 255, 0.8)";
//           gpsInfo.style.padding = "5px";
//           gpsInfo.style.border = "1px solid #ccc";
//           gpsInfo.style.borderRadius = "5px";
//           imageContainer.appendChild(gpsInfo);
//         },
//         (error) => {
//           console.error("Error getting location:", error.message);
//         }
//       );
//     } else {
//       console.error("Geolocation API not supported by this browser.");
//     }
  
//     // Images to show
//     const images = [
//       { src: "image1.jpg", delay: 60 },    // 1 minute
//       { src: "image2.jpg", delay: 300 },  // 5 minutes
//       { src: "image3.jpg", delay: 600 }   // 10 minutes
//     ];
  
//     images.forEach(({ src, delay }) => {
//       setTimeout(() => {
//         const img = document.createElement("img");
//         img.src = src;
//         img.alt = "Timed Image";
//         img.style.display = "block"; // Make it visible
//         img.style.top = `${Math.random() * 200}px`; // Random position
//         img.style.left = `${Math.random() * 200}px`;
//         imageContainer.appendChild(img);
//       }, delay * 1000);
//     });
//   });

// document.addEventListener("DOMContentLoaded", () => {
//     const imageContainer = document.getElementById("image-container");
//     let initialLocation = null;
//     let locationTimer = null;
  
//     // Function to lock the website
//     const lockWebsite = () => {
//       // Create an overlay
//       const overlay = document.createElement("div");
//       overlay.style.position = "fixed";
//       overlay.style.top = "0";
//       overlay.style.left = "0";
//       overlay.style.width = "100%";
//       overlay.style.height = "100%";
//       overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
//       overlay.style.color = "white";
//       overlay.style.display = "flex";
//       overlay.style.justifyContent = "center";
//       overlay.style.alignItems = "center";
//       overlay.style.fontSize = "24px";
//       overlay.style.zIndex = "1000";
//       overlay.innerText = "Website locked due to staying at the same location for over 10 minutes.";
//       document.body.appendChild(overlay);
  
//       // Blur the content
//       document.body.style.filter = "blur(5px)";
//     };
  
//     // Function to check if the device is at the same location
//     const checkLocation = (position) => {
//       const { latitude, longitude } = position.coords;
  
//       if (!initialLocation) {
//         // Save the initial location
//         initialLocation = { latitude, longitude };
//         console.log("Initial location recorded:", initialLocation);
  
//         // Start the timer
//         locationTimer = setTimeout(() => {
//           lockWebsite();
//         }, 10 * 60 * 1000); // 10 minutes
//       } else {
//         // Check if the location has changed
//         const distance = Math.sqrt(
//           Math.pow(initialLocation.latitude - latitude, 2) +
//           Math.pow(initialLocation.longitude - longitude, 2)
//         );
  
//         if (distance > 0.0001) {
//           console.log("Location changed. Resetting timer.");
//           initialLocation = { latitude, longitude }; // Update the initial location
//           clearTimeout(locationTimer); // Reset the timer
//           locationTimer = setTimeout(() => {
//             lockWebsite();
//           }, 10 * 60 * 1000); // 10 minutes
//         } else {
//           console.log("Location unchanged.");
//         }
//       }
//     };
  
//     // Check if Geolocation API is available
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(
//         checkLocation,
//         (error) => {
//           console.error("Error getting location:", error.message);
//         },
//         {
//           enableHighAccuracy: true,
//           maximumAge: 10000,
//           timeout: 5000,
//         }
//       );
//     } else {
//       console.error("Geolocation API not supported by this browser.");
//     }
  
//     // Images to show
//     const images = [
//       { src: "image1.jpg", delay: 60 },    // 1 minute
//       { src: "image2.jpg", delay: 300 },  // 5 minutes
//       { src: "image3.jpg", delay: 600 }   // 10 minutes
//     ];
  
//     images.forEach(({ src, delay }) => {
//       setTimeout(() => {
//         const img = document.createElement("img");
//         img.src = src;
//         img.alt = "Timed Image";
//         img.style.display = "block"; // Make it visible
//         img.style.top = `${Math.random() * 200}px`; // Random position
//         img.style.left = `${Math.random() * 200}px`;
//         imageContainer.appendChild(img);
//       }, delay * 1000);
//     });
//   });
  
document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    let initialLocation = null;
    let locationTimer = null;
  
    // Function to lock the website
    const lockWebsite = (message) => {
      // Create an overlay
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      overlay.style.color = "white";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.fontSize = "24px";
      overlay.style.zIndex = "1000";
      overlay.innerText = message || "Website locked due to lack of GPS access.";
      document.body.appendChild(overlay);
  
      // Blur the content
      document.body.style.filter = "blur(5px)";
      document.body.style.pointerEvents = "none"; // Prevent interaction
    };
  
    // Prompt user for permission
    const askPermission = () => {
      const userConsent = confirm(
        "This website collects your GPS location for its functionality. Do you allow access?"
      );
      if (!userConsent) {
        lockWebsite("Access denied. Website functionality requires GPS.");
      } else {
        startTrackingLocation();
      }
    };
  
    // Function to track GPS location
    const startTrackingLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          checkLocation,
          (error) => {
            console.error("Error getting location:", error.message);
            lockWebsite("Unable to access GPS. Website locked.");
          },
          {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 5000,
          }
        );
      } else {
        console.error("Geolocation API not supported by this browser.");
        lockWebsite("Geolocation not supported by your browser.");
      }
    };
  
    // Function to check if the device is at the same location
    const checkLocation = (position) => {
      const { latitude, longitude } = position.coords;
  
      if (!initialLocation) {
        // Save the initial location
        initialLocation = { latitude, longitude };
        console.log("Initial location recorded:", initialLocation);
  
        // Start the timer
        locationTimer = setTimeout(() => {
          lockWebsite("Website locked due to staying at the same location for over 10 minutes.");
        }, 10 * 60 * 1000); // 10 minutes
      } else {
        // Check if the location has changed
        const distance = Math.sqrt(
          Math.pow(initialLocation.latitude - latitude, 2) +
          Math.pow(initialLocation.longitude - longitude, 2)
        );
  
        if (distance > 0.0001) {
          console.log("Location changed. Resetting timer.");
          initialLocation = { latitude, longitude }; // Update the initial location
          clearTimeout(locationTimer); // Reset the timer
          locationTimer = setTimeout(() => {
            lockWebsite("Website locked due to staying at the same location for over 10 minutes.");
          }, 10 * 60 * 1000); // 10 minutes
        } else {
          console.log("Location unchanged.");
        }
      }
    };
  
    // Images to show
    const images = [
      { src: "image1.jpg", delay: 60 },    // 1 minute
      { src: "image2.jpg", delay: 300 },  // 5 minutes
      { src: "image3.jpg", delay: 600 }   // 10 minutes
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
  
    // Ask for GPS permission on page load
    askPermission();
  });

  document.getElementById("accept-button").addEventListener("click", () => {
    document.getElementById("permission-modal").style.display = "none";
    startTrackingLocation();
  });
  
  document.getElementById("decline-button").addEventListener("click", () => {
    lockWebsite("Access denied. Website locked.");
  });
  