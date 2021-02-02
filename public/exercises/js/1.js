const quote = document.getElementById("quote");
const button = document.getElementById("button");
const link = document.getElementById("link");

quote.style.display = "none";

button.addEventListener("click", () => {
  quote.style.display = "block";
});

link.addEventListener("click", () => {
  // Were you able to find this code during exercise 1?
  alert("The link was clicked");
});
