const Buying = require("../model/buying-order.model")
const BuyWoodType = require("../model/by-wood-types.model")
const Cutting = require("../model/custting-order.model")
const Selling = require("../model/selling.model")
const TreeType = require("../model/tree-types.model")
const User = require("../model/user.model")
const WoodType = require("../model/woods-types.model")

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.getWoodsData = (req, res) => {
    try {
        // need to get data from database
        if (req.query.slides == '1') {
            res.status(200).send({
                slides: [
                    {
                        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
                        title: "title1",
                        subTitle: "subTitle1"
                    }
                ]
            })
        } else {
            res.status(200).send({
                slides: [
                    {
                        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
                        title: "title1",
                        subTitle: "subTitle1"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFYzhHAUCcjjlbxNRZaw5uQ07XOODf8bK86yh853tZwJvrvqxYOz3BkdMAcY2emSwqn8&usqp=CAU",
                        title: "title2",
                        subTitle: "subTitle2"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mIYEysd-J9vbt0acfXh9X3LurwkNnRjMOCQwrBT0MsWQwHzrLCMN8lJs8OPop0VYmKA&usqp=CAU",
                        title: "title3",
                        subTitle: "subTitle3"
                    }
                ]
            })
        }
    } catch (err) {
        res.status(500).send('Internel Server Error')
    }
}

const userSignUp = async (req, res) => {
    try {
        const {name, password, email } = req.body;
        //check the email
        const user = await User.findOne( { email } );
        if (user) {
            return res.status(400).json({ error: "User already exist" });
        }
        const bycriptPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            email_verified_at: new Date(),
            password: bycriptPassword,
        });

        newUser.save();
        return res.send(newUser);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const userSignIn = async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await User.findOne( { email } );
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = { id: user.id };
            const data = {
              access_token: jwt.sign(payload, 'secret', { expiresIn: 60 * 60 }),
              userId: user.id,
              username: user.name,
              type: 'Bearer',
              expiresIn: 60 * 60,
            };
            return res.send(data);
        } else {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}



const getUserData = (req, res) => {
    try {
        const user = new TreeType({
            type: "type 1",
            cube_price: 30,
            clean_price: 20,
        });

        user.save();
        console.log(user)
        return res.send('token');
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const getTreeTypeData = (req, res) => {
    try {
        // Retrieve tree types
        TreeType.find({}, (err, treeTypes) => {
            if (err) {
                console.error(err);
                return;
            }
            // Close the database connection when done (optional)
            // mongoose.connection.close();
            return res.header("auth-token", 'accessToken').send( treeTypes )
        });

    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createTreeTypeData = async(req, res) => {
    try {
        // Retrieve tree types
        const a = await TreeType.create(req.body)
        return res.status(200).json({"data": a})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}
//remove
const createWoodType = async(req, res) => {
    try {
        // Retrieve tree types
        const a = await WoodType.create(req.body)
        return res.status(200).json({"data": a})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const getWoodTypes = async(req, res) => {
    try {
        // Retrieve tree types
        const woodTypes = await WoodType.find()
        return res.status(200).json(woodTypes )
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

//remove
const createBuyWoodType = async(req, res) => {
    try {
        // Retrieve tree types
        const a = await BuyWoodType.create(req.body)
        return res.status(200).json({"data": a})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const getBuyWoodTypes = async(req, res) => {
    try {
        // Retrieve tree types
        const woodTypes = await BuyWoodType.find()
        return res.status(200).json(woodTypes )
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createCuttingItem = async(req,res) => {
    try {
        const cuttingItem = await Cutting.create(req.body)
        return res.status(200).json({"data": cuttingItem})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createBuyingItem = async(req,res) => {
    try {
        const buyingItem = await Buying.create(req.body)
        return res.status(200).json({"data": buyingItem})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createSellingItem = async(req,res) => {
    try {
        const sellingItem = await Selling.create(req.body)
        return res.status(200).json({"data": sellingItem})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const editSellingItem = async(req,res) => {
    try {
        const sellingItem = await Selling.findOneAndUpdate({_id: req.params.id}, req.body)
        return res.status(200).json({"data": sellingItem})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const deleteSellingItem = async(req,res) => {
    try {
        const sellingItem = await Selling.deleteOne({_id: req.params.id})
        return res.status(200).json({"data": sellingItem})
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = { getUserData, getTreeTypeData, createCuttingItem,createBuyingItem,createSellingItem, 
    editSellingItem,deleteSellingItem,createTreeTypeData, createWoodType, getWoodTypes,createBuyWoodType,getBuyWoodTypes, userSignUp, userSignIn }