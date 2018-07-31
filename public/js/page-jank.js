const appRoot = document.getElementById("root");
const position = document.getElementById("position");

window.addEventListener("load", renderText);
window.addEventListener("scroll", getWindowPosition);

function renderText() {
  for (var i = 0; i < 20000; i++) {
    const div = document.createElement("div");
    div.classList.add("box");

    div.innerText = i;
    appRoot.appendChild(div);
  }
}

function getWindowPosition() {
  for (var i = 0; i < 20000; i++) {
    console.log("Scrolling: " + window.pageYOffset);
  }
  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const scrollY = window.scrollY;
  position.innerText = `Your scroll position is ${scrollY} / ${height}`;
}
