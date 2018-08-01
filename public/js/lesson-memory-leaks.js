var x = [];

function grow() {
  x.push(new Array(1000000).join("x"));
}

setInterval(grow, 100);
