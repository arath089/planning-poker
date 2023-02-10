const Poll = require("../models/Poll");

//render index page
function get(req, res, next) {
  res.render("index", { title: "Pocker Polls" });
}

module.exports = {
  get,
};
