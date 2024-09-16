const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from NODE API.")
});

mongoose.connect("mongodb+srv://invictusasw7:lMK4nlpPjt99G37y@backend.hwcij.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Serve is running at port 3000");
    });
})
.catch(() => {
    console.log("Connection Failed!");
})