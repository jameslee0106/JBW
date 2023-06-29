const express = require("express");
const cors = require('cors');
const app = express()
app.use(cors());
let mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();
// const asyncHandler = require("express-asy")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://roof558:0512@jbw.1vqbwn6.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Server Connect')
    }) 
    .catch((error) => {
        console.error('Failed to Connect', error)
    })
const PORT = process.env.PORT || 27017
// const PORT = process.env.PORT || 3000

// mongoose.connect("mongodb://localhost/JBW", {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => {
//         console.log('Server Connect')
//     }) 
//     .catch((error) => {
//         console.error('Failed to Connect', error)
//     })

const UserSchema = new mongoose.Schema({
    username: { type: String,
                // unique: true,
                required:[true, "username must be provided"]
    },
    password: {type: String,
                required:[true, "password must be provided"]
    },
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);
module.exports = User;

// baseURL = "mongodb+srv://roof558:0512@jbw.1vqbwn6.mongodb.net/?retryWrites=true&w=majority"

// app.use(function(req, res, next) {
//     if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//         console.log("Hello");
//         console.log(req.headers.authorization);
//         const token = req.headers.authorization.split(' ')[1];
//         jsonwebtoken.verify(token, 'RESTFULAPIs', function(err, decode) {
//             if (err) {
//                 req.user = undefined;
//             } else {
//                 req.user = decode;
//             }
//             next();
//         });
//     } else {
//         console.log("Bye");
//         console.log(req.headers.authorization);
//         req.user = undefined;
//         next();
//     }
// });

const routes = require("./server/routes.js")
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
}) ;

app.listen(PORT, function() {
    console.log("Server running on port", PORT);
});

module.exports = app;