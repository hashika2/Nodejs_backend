const Buying = require("../model/buying-order.model")
const BuyWoodType = require("../model/by-wood-types.model")
const Customer = require("../model/customer.model")
const Cutting = require("../model/custting-order.model")
const Selling = require("../model/selling-order.model")
const TreeType = require("../model/tree-types.model")
const User = require("../model/user.model")
const WoodType = require("../model/woods-types.model")

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const ProductCart = require("../model/product-cart.model")
const Product = require("../model/product.model")
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: '65b08458-87762277' || 'key-yourkeyhere'});

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    service: 'Mailgun',
    auth: {
      user: 'postmaster@sandbox3da8e7510085440aaaf033d264fb17f9.mailgun.org',
      pass: '6826a6692bbee3a9a701f172615a7fce-65b08458-e020b1ed'
    }
  });

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
        sendEmail(email, 'User Creation', "<h1>User created successfully!</h1>")
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
        sendEmail(req.body.email);
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
        return res.status(200).json(cuttingItem)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createBuyingItem = async(req,res) => {
    try {
        const buyingItem = await Buying.create(req.body)
        return res.status(200).json(buyingItem)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const createSellingItem = async(req,res) => {
    try {
        const customer = await Customer.create(req.body.customer)
        const sellingData = {...req.body.orderDetails,customer_id: customer._id}
        const sellingItem = await Selling.create(sellingData)
        return res.status(200).json(sellingItem)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const productAddToCart = async(req,res) => {
    try {
        const customer = await Customer.create(req.body.customer)
        const sellingData = {...req.body.orderDetails,customer_id: customer._id}
        const sellingItem = await ProductCart.create(sellingData)
        sendEmail(req.body?.email, 'Checkout Products', "<h1>Checkout is successfully!</h1>")
        return res.status(200).json(sellingItem)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const cuttingOrderPayment = async(req,res) => {
    try {
        const customer = await Customer.create(req.body)
        const cuttingPaymentData = await Cutting.findOneAndUpdate({_id: req.params.id},{customer_id: customer._id})
        return res.status(200).json(cuttingPaymentData )
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const buyingOrderPayment = async(req,res) => {
    try {
        const customer = await Customer.create(req.body)
        const buyingPaymentData = await Buying.findOneAndUpdate({_id: req.params.id},{customer_id: customer._id}) 
        sendEmail(req.body?.email, 'Checkout Woods', "<h1>Checkout is successfully!</h1>")
        return res.status(200).json(buyingPaymentData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
}

const addCustomerDetails = async(req,res) => {
    try {
        const customer = await Customer.create(req.body)
        return res.status(200).json(customer)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const sendEmail = (email, subject, html) => {
    try{
        var mailOptions = {
            from:  "Hogwart's <m.g.hashikamaduranga@gmail.com>",
            to: email,
            subject,
            text: 'That was easy!',
            html
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        // mg.messages.create('sandbox3da8e7510085440aaaf033d264fb17f9.mailgun.org', {
        //     from: "Excited User <m.g.hashikamaduranga@gmail.com>",
        //     to: ["m.g.hashikamaduranga@gmail.com"],
        //     subject: "Hello",
        //     text: "Testing some Mailgun awesomeness!",
        //     html: "<h1>Testing some Mailgun awesomeness!</h1>"
        // })
        // .then(msg => console.log(msg)) // logs response data
        // .catch(err => console.log(err));
    }catch(error){
        console.log('Email error: ' + error);
    }
}

const addProduct = async(req,res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

const getProducts = async(req,res) => {
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}


module.exports = { getUserData, getTreeTypeData, createCuttingItem,createBuyingItem,
    createSellingItem,createTreeTypeData, createWoodType, getWoodTypes,createBuyWoodType,
    getBuyWoodTypes, addCustomerDetails,cuttingOrderPayment, buyingOrderPayment,userSignUp, userSignIn,productAddToCart,addProduct,getProducts }
