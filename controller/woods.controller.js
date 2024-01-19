const { getWoodsData, getUserData, getTreeTypeData, createCuttingItem, createSellingItem, createBuyingItem, createTreeTypeData, createWoodType, getWoodTypes, getBuyWoodTypes, createBuyWoodType, addCustomerDetails,cuttingOrderPayment,buyingOrderPayment,userSignUp, userSignIn, productAddToCart, getProducts, addProduct } = require("../service/woods.service");

exports.signUp = (req, res) => {
    return userSignUp(req, res);
  };

exports.signIn = (req, res) => {
    return userSignIn(req, res);
};
  
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

exports.productAddToCart = (req, res) => {
    return productAddToCart(req,res)
};

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

exports.addProduct = (req,res) => {
    return addProduct(req,res)
}

exports.getProducts = (req,res) => {
    return getProducts(req,res)
}
