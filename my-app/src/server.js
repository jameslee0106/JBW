const express = require("express");
const cors = require('cors');
const connectDb = require("./server/config/dbConnection");
const user = require("./server/model/userModel");
const app = express();
app.use(cors());
// let mongoose = require("mongoose");
const dotenv = require('dotenv').config();

connectDb();
user();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes/userRoutes.js");
app.use(routes);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
}) ;

const PORT = process.env.PORT || 27018;
app.listen(PORT, function() {
    console.log("Server running on port", PORT);
});