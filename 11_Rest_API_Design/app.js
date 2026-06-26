const express = require("express");

const app = express();

app.use(express.json());


// GET ALL PRODUCTS
app.get("/products", (req, res) => {

    res.status(200).json({

        message: "All Products"

    });

});


// GET SINGLE PRODUCT
app.get("/products/:id", (req, res) => {

    const id = req.params.id;

    res.status(200).json({

        message: "Single Product",
        id: id

    });

});


// ADD PRODUCT
app.post("/products", (req, res) => {

    console.log(req.body);

    res.status(201).json({

        message: "Product Added"

    });

});


// UPDATE PRODUCT
app.put("/products/:id", (req, res) => {

    const id = req.params.id;

    res.status(200).json({

        message: "Product Updated",
        id: id

    });

});


// DELETE PRODUCT
app.delete("/products/:id", (req, res) => {

    const id = req.params.id;

    res.status(200).json({

        message: "Product Deleted",
        id: id

    });

});


app.listen(5000, () => {

    console.log(`Server Running http://localhost:5000`);

});