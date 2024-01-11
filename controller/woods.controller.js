const { getWoodsData, getUserData, getTreeTypeData } = require("../service/woods.service");

exports.getUsers = (req, res) => {
  return getUserData(req, res);
};

exports.getTreeTypes = (req, res) => {
    return getTreeTypeData(req, res);
};

exports.creatingCuttongOrder = (req, res) => {
    return getWoodsData(req, res);
};

exports.getWoodTypes = (req, res) => {
    return getWoodsData(req, res);
};

exports.getBuyWoodType = (req, res) => {
    return getWoodsData(req, res);
};
