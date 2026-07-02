const validateProduct = (req, res, next) => {

    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "All fields required"
        });
    }
    next();

};

module.exports = validateProduct;