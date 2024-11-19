// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop');
// let resetBtn = document.getElementById('reset');

// let hour = 0o0;
// let minute = 0o0;
// let second = 0o0;
// let count = 0o0;

// startBtn.addEventListener('click', function () {
//     timer = true;
//     stopWatch();
// });

// stopBtn.addEventListener('click', function () {
//     timer = false;
// });

// resetBtn.addEventListener('click', function () {
//     timer = false;
//     hour = 0;
//     minute = 0;
//     second = 0;
//     count = 0;
//     document.getElementById('hr').innerHTML = "00";
//     document.getElementById('min').innerHTML = "00";
//     document.getElementById('sec').innerHTML = "00";
//     document.getElementById('count').innerHTML = "00";
// });

// function stopWatch() {
//     if (timer) {
//         count++;

//         if (count == 100) {
//             second++;
//             count = 0;
//         }

//         if (second == 60) {
//             minute++;
//             second = 0;
//         }

//         if (minute == 60) {
//             hour++;
//             minute = 0;
//             second = 0;
//         }

//         let hrString = hour;
//         let minString = minute;
//         let secString = second;
//         let countString = count;

//         if (hour < 10) {
//             hrString = "0" + hrString;
//         }

//         if (minute < 10) {
//             minString = "0" + minString;
//         }

//         if (second < 10) {
//             secString = "0" + secString;
//         }

//         if (count < 10) {
//             countString = "0" + countString;
//         }

//         document.getElementById('hr').innerHTML = hrString;
//         document.getElementById('min').innerHTML = minString;
//         document.getElementById('sec').innerHTML = secString;
//         document.getElementById('count').innerHTML = countString;
//         setTimeout(stopWatch, 10);
//     }
// }


document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
  
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
  