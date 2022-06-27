const images = ["img1.jpg", "img2.jpg", "img3.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.setAttribute("src", `img/${chosenImage}`);

document.body.appendChild(img)