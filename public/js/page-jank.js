const appRoot = document.getElementById("root");
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
const originalLogo = document.querySelector(".jank-logo");

let rAF;
let allLogos;
let count = 10;
let distance = 3;
let bodySize = document.body.getBoundingClientRect();
let logoSize = originalLogo.getBoundingClientRect();
let maxHeight = Math.floor(bodySize.height - logoSize.height);

function init() {
  if (allLogos) {
    bodySize = document.body.getBoundingClientRect();
    for (let i = 0; i < allLogos.length; i++) {
      document.body.removeChild(allLogos[i]);
    }
    document.body.appendChild(originalLogo);
    logoSize = originalLogo.getBoundingClientRect();
    document.body.removeChild(originalLogo);
    maxHeight = Math.floor(bodySize.height - logoSize.height);
  }
  for (let i = 0; i < count; i++) {
    let newLogo = originalLogo.cloneNode();
    let top = Math.floor(Math.random() * maxHeight);
    if (top === maxHeight) {
      newLogo.classList.add("up");
    } else {
      newLogo.classList.add("down");
    }
    newLogo.style.left = i / (count / 97) + "vw";
    newLogo.style.top = top + "px";
    document.body.appendChild(newLogo);
  }

  allLogos = document.querySelectorAll(".jank-logo");
  count = allLogos.length;
}

function move() {
  for (let i = 0; i < allLogos.length; i++) {
    let currentLogo = allLogos[i];
    let currentLogoPosition = currentLogo.classList.contains("down")
      ? currentLogo.offsetTop + distance
      : currentLogo.offsetTop - distance;
    if (currentLogoPosition < 0) currentLogoPosition = 0;
    if (currentLogoPosition > maxHeight) currentLogoPosition = maxHeight;
    currentLogo.style.top = currentLogoPosition + "px";
    if (currentLogo.offsetTop === 0) {
      currentLogo.classList.remove("up");
      currentLogo.classList.add("down");
    }
    if (currentLogo.offsetTop === maxHeight) {
      currentLogo.classList.remove("down");
      currentLogo.classList.add("up");
    }
  }

  rAF = window.requestAnimationFrame(move);
}

addButton.addEventListener("click", () => {
  count = count + 50;
  init();
});

removeButton.addEventListener("click", () => {
  if (count >= 50) {
    count = count - 50;
  }
  init();
});

window.addEventListener("resize", () => {
  init();
});

window.addEventListener("load", () => {
  appRoot.removeChild(originalLogo);
  init();
  rAF = window.requestAnimationFrame(move);
});
