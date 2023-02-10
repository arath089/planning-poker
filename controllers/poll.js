const Poll = require("../models/Poll");

function findAll(req, res, next) {
  Poll.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "OK",
        data: data,
      });
    })
    .catch((e) => {
      res.status(500).json({
        success: false,
        message: "error",
        error: e,
      });
    });
}

async function create(req, res, next) {
  var { voter_name, estimation } = req.body;
  if (!voter_name) {
    res.status(400).json({
      success: false,
      message: "error",
      error: "Voter name (voter_name) cannot be empty!",
    });
  } else if (!estimation) {
    res.status(400).json({
      success: false,
      message: "error",
      error: "Estimation (estimation) cannot be empty!",
    });
  } else {
    try {
      const data = await Poll.create({ voter_name, estimation });

      res.status(200).json({
        success: true,
        message: "OK",
        data: data,
      });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "error",
        error: e,
      });
    }
  }
}
module.exports = {
  findAll,
  create,
};
