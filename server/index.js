const express = require("express");
const imageData = require("./imageData");
const fs = require("fs");
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

// Home Page
app.get("/", function(req, res) {
  res.render("index", {
    scripts: ["main.js"]
  });
});

// Exercises page
app.get("/exercises", function(req, res) {
  res.render("exercises/exercises", {
    scripts: ["main.js"]
  });
});

// External Resources
app.get("/resources", function(req, res) {
  res.render("resources");
});

// Editing Demo
app.get("/exercises/editing", function(req, res) {
  res.render("exercises/editing", {
    scripts: ["editing.js"]
  });
});

// Debugging Demo
app.get("/exercises/debugging", function(req, res) {
  res.render("exercises/debugging", {
    scripts: ["debugging.js"]
  });
});

// Debugging API Endpoint
app.get("/api", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(imageData));
});

// Auditing Demo
app.get("/exercises/audit", function(req, res) {
  res.render("exercises/audit", {
    scripts: ["audit.js"]
  });
});

// Auditing Demo
app.get("/exercises/node", function(req, res) {
  let characters = "";

  for (var i = 0; i < 100; i++) {
    let foo = fs.readFileSync(__dirname + "/really_long_file.txt", {
      encoding: "utf8"
    });
  }
  res.render("exercises/node");
});

// Timing Demo
app.get("/exercises/mark-and-measure", function(req, res) {
  res.render("exercises/mark-and-measure", {
    scripts: ["mark-and-measure.js"]
  });
});

// Srcset Demo
app.get("/exercises/srcset", function(req, res) {
  res.render("exercises/srcset");
});

// Page Jank Demo
app.get("/exercises/page-jank", function(req, res) {
  res.render("exercises/page-jank", {
    scripts: ["page-jank.js"]
  });
});

// Memory Leaks
app.get("/exercises/memory-leaks", function(req, res) {
  res.render("exercises/memory-leaks/index", {
    scripts: ["memory-leaks.js"]
  });
});

app.get("/exercises/memory-leaks/one", function(req, res) {
  res.render("exercises/memory-leaks/one");
});

app.get("/exercises/memory-leaks/two", function(req, res) {
  res.render("exercises/memory-leaks/two");
});

app.get("/exercises/memory-leaks/three", function(req, res) {
  res.render("exercises/memory-leaks/three", {
    scripts: ["memory-leaks.js"]
  });
});

app.get("/exercises/memory-leaks/four", function(req, res) {
  res.render("exercises/memory-leaks/four");
});

// Lessons
app.get("/lessons/editing", function(req, res) {
  res.render("lessons/editing", {
    scripts: ["lesson-editing.js"]
  });
});

app.get("/lessons/debugging", function(req, res) {
  res.render("lessons/debugging", {
    scripts: ["lesson-debugging.js"]
  });
});

app.get("/lessons/profiling", function(req, res) {
  res.render("lessons/profiling", {
    scripts: ["lesson-profiling.js"]
  });
});

app.get("/lessons/memory-leaks", function(req, res) {
  res.render("lessons/memory-leaks", {
    scripts: ["lesson-memory-leaks.js"]
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port http://localhost:3000");
});
