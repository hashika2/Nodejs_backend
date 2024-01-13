const { getWoodsData, getUserData, getTreeTypeData, createCuttingItem, createSellingItem, createBuyingItem, createTreeTypeData, createWoodType, getWoodTypes, getBuyWoodTypes, createBuyWoodType, addCustomerDetails,cuttingOrderPayment,buyingOrderPayment } = require("../service/woods.service");

exports.getUsers = (req, res) => {
  return getUserData(req, res);
};

exports.getTreeTypes = (req, res) => {
    return getTreeTypeData(req, res);
};
//remove
exports.createTreeTypes = (req, res) => {
    return createTreeTypeData(req,res)
};

exports.creatingCuttingOrder = (req, res) => {
    return createCuttingItem(req,res)
};

exports.cuttingOrderPay = (req, res) => {
    return cuttingOrderPayment(req,res)
};

exports.creatingBuyingOrder = (req, res) => {
    return createBuyingItem(req,res)
};

exports.buyingOrderPay = (req, res) => {
    return buyingOrderPayment(req,res)
};

exports.creatingSellingOrder = (req, res) => {
    return createSellingItem(req,res)
};

// exports.editSellingOrder = (req, res) => {
//     return editSellingItem(req,res)
// };

// exports.deleteSellingOrder = (req, res) => {
//     return deleteSellingItem(req,res)
// };

// exports.getWoodTypes = (req, res) => {
//     return getWoodsData(req, res);
// };

exports.addWoodTypes = (req,res) => {
    return createWoodType(req,res)
}

exports.getWoodTypes = (req,res) => {
    return getWoodTypes(req,res)
}
//remove
exports.addBuyWoodTypes = (req,res) => {
    return createBuyWoodType(req,res)
}

exports.getBuyWoodTypes = (req, res) => {
    return getBuyWoodTypes(req,res)
};

exports.addCustomer = (req,res) => {
    return addCustomerDetails(req,res)
}
