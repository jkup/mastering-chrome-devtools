module.exports = (req, res) => {
  res.render("exercises/exercises", {
    scripts: ["main.js"],
  });
};
