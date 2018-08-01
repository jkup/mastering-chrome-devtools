window.addEventListener("load", init);
window.addEventListener("scroll", handleScroll);

function init() {
  for (let i = 0; i < 200; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = `id: ${i}`;
    document.body.appendChild(box);
  }
}

function handleScroll() {
  fetch("/api", {
    cache: "no-cache"
  })
    .then(result => result.json())
    .then(() =>
      setTimeout(() => {
        init();
      }, 1000)
    );
}
