const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

router.post(
    "/product",
    upload.single("image"),
    (req, res) => {

        const { name, price } = req.body;

        res.json({
            name,
            price,
            image: req.file.filename
        });

    }
);

module.exports = router;