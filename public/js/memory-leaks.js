var x = [];

function createSomeNodes() {
  var div,
    i = 100,
    frag = document.createDocumentFragment();
  for (; i > 0; i--) {
    div = document.createElement("div");
    div.appendChild(
      document.createTextNode(i + " - " + new Date().toTimeString())
    );
    frag.appendChild(div);
  }
  document.getElementById("nodes").appendChild(frag);
}
function grow() {
  x.push(new Array(1000000).join("x"));
  createSomeNodes();
  setTimeout(grow, 1000);
}

grow();
