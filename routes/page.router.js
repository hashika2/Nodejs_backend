let express = require('express');
let router = express.Router();
const carousel = require('../controller/carousel.controller');
const wood = require('../controller/woods.controller');

router.get(`/carousel`, (req,res)=> carousel.getAll(req,res));

router.get(`/user`, (req,res)=> wood.getUsers(req,res));
router.get(`/tree-types`, (req,res)=> wood.getTreeTypes(req,res));
router.post(`/cutting-order`, (req,res)=> wood.creatingCuttongOrder(req,res));
router.get(`/wood-types`, (req,res)=> wood.getWoodTypes(req,res));
router.get(`/buy-wood-types`, (req,res)=> wood.getBuyWoodType(req,res));

module.exports = router;