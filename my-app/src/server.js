const express = require("express");
const cors = require('cors');
const app = express()
app.use(cors());
let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken');

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
    // role: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Role"
    //     }
    // ]
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);
module.exports = User;

// baseURL = "mongodb+srv://roof558:0512@jbw.1vqbwn6.mongodb.net/?retryWrites=true&w=majority"
const main = require("./server/main.js");

app.get("/api/", function(req, res) {
    main.index(req, res);
});

app.post("/api/auth/registar", function(req, res) {
    main.newUser(req, res);
});

app.post("/api/auth/login", function(req, res) {
    main.loginUser(req, res);
});

app.get("/api/profile", function(req, res, next){
    main.profile(req, res, next);
});

app.use(function(req, res, next) {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
            if (error) req.User = undefined;
            req.User = decode;
            next();
        })
    }
    else {
        req.User = undefined;
        next();
    }
});

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
}) ;

require("./server/routes.js")(app)

app.listen(PORT, function() {
    console.log("Server running on port", PORT);
});

// module.exports = app;