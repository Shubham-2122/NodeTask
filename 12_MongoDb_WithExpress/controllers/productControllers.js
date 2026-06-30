const Product = require("../models/Product");

// create product post method

const createproduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get All products
const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get single product

const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateproduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete Product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status().json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const categoryFind = async (req, res) => {
  try {
    const category = req.query.category 

    const product = await Product.find({category})

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createproduct,
  getProductbyId,
  getProducts,
  updateproduct,
  deleteProduct,
  categoryFind
};
