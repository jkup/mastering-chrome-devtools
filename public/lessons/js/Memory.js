var x = [];

function grow() {
  for (var i = 0; i < 1000; i++) {
    document.body.appendChild(document.createElement("div"));
  }
  x.push(new Array(1000000).join("x"));
}

document.getElementById("grow").addEventListener("click", grow);

var detachedTree;

function create() {
  var ul = document.createElement("ul");
  for (var i = 0; i < 1000; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
  }
  detachedTree = ul;
}

document.getElementById("create").addEventListener("click", create);
