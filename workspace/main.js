// Cache DOM elements
const form = document.getElementById("form");
const list = document.getElementById("list");

// Create the list
const items = [
  "Center the page title",
  "Change the background color to #333",
  "Edit the JavaScript so typing text and hitting enter adds the item to the list!",
];

function render() {
  list.innerHTML = null;
  // Append items to the list
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

form.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    console.log(form.value);
    // Now add the item to the list!
    render();
  }
});

render();