var x = [];

function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement("div"));
  }
  x.push(new Array(1000000).join("x"));
}

document.getElementById("grow").addEventListener("click", grow);
