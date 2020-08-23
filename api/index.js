module.exports = (req, res) => {
  res.render("index", {
    scripts: ["main.js"],
  });
};
