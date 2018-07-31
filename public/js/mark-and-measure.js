window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  fetch("/api")
    .then(result => result.json())
    .then(json => {
      json.images.forEach(image => console.log(image.name));
    });
}
