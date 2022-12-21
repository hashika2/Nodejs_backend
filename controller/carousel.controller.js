const { getCarousalData } = require("../service/carousel.service");

exports.getAll = (req, res) => {
  return getCarousalData(req, res);
};

exports.getSum = (num) => {
  return num + num;
};