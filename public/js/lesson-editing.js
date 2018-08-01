const changes = document.querySelector(".domChanges");
window.setInterval(toggleBorder, 1000);

function toggleBorder() {
  if (changes.classList.contains("redBorder")) {
    changes.classList.remove("redBorder");
    changes.classList.add("blueBorder");
  } else {
    changes.classList.remove("blueBorder");
    changes.classList.add("redBorder");
  }
}

window.addEventListener("scroll", doNothing);

function doNothing() {
  // You found me!
}
