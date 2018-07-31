const express = require("express");
const imageData = require("./imageData");
const fs = require("fs");
// const compression = require('compression')
const app = express();

app.set("view engine", "pug");

// app.use(compression())
app.use(express.static("public"));

// Home Page
app.get("/", function(req, res) {
  res.render("index", {
    scripts: ["main.js"]
  });
});

// Editing Demo
app.get("/editing", function(req, res) {
  res.render("editing", {
    scripts: ["editing.js"]
  });
});

// Debugging Demo
app.get("/debugging", function(req, res) {
  res.render("debugging", {
    scripts: ["debugging.js"]
  });
});

// Debugging API Endpoint
app.get("/api", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(imageData));
});

// Auditing Demo
app.get("/audit", function(req, res) {
  res.render("audit", {
    scripts: ["audit.js"]
  });
});

// Auditing Demo
app.get("/node", function(req, res) {
  let characters = "";

  for (var i = 0; i < 100; i++) {
    let foo = fs.readFileSync(__dirname + "/really_long_file.txt", {
      encoding: "utf8"
    });
  }
  res.render("node");
});

// Timing Demo
app.get("/timing", function(req, res) {
  res.render("timing", {
    scripts: ["timing.js"]
  });
});

// Page Jank Demo
app.get("/page-jank", function(req, res) {
  res.render("page-jank");
});

// Memory Leaks
app.get("/memory-leaks", function(req, res) {
  res.render("memory-leaks/index", {
    scripts: ["memory-leaks.js"]
  });
});

app.get("/memory-leaks/one", function(req, res) {
  res.render("memory-leaks/one");
});

app.get("/memory-leaks/two", function(req, res) {
  res.render("memory-leaks/two");
});

app.get("/memory-leaks/three", function(req, res) {
  res.render("memory-leaks/three", {
    scripts: ["memory-leaks.js"]
  });
});

app.get("/memory-leaks/four", function(req, res) {
  res.render("memory-leaks/four");
});

app.listen(3000, function() {
  console.log("Example app listening on port http://localhost:3000");
});
