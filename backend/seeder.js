const dotenv = require('dotenv');
const users = require('./data/users.js');
const products = require("./data/products.js")
const User = require('./models/userModel.js');
const Order = require('./models/orderModel.js');
const mongoose = require("mongoose");
const Product = require('./models/productModel.js');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const importData = async () => {
  try {
    await Order.deleteMany();
    // await User.deleteMany();

    await Product.insertMany(products);

    console.log('Data Added to DB'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();

    console.log('Data Destoryed = require(DB'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destoryData();
} else {
  importData();
}
