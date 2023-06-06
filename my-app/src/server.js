const express = require("express");
const cors = require('cors');
const app = express()
app.use(cors());
let mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
const jwt = require('jsonwebtoken');
module.exports = User;

// baseURL = "mongodb+srv://roof558:0512@jbw.1vqbwn6.mongodb.net/?retryWrites=true&w=majority"
const main = require("./server/main.js");

app.get("/api/", function(req, res) {
    main.index(req, res);
});

app.post("/api/user/new", function(req, res) {
    main.newUser(req, res);
});

app.post("/api/user/login", function(req, res) {
    main.loginUser(req, res);
});

require("./server/routes.js")(app)

app.listen(PORT, function() {
    console.log("Server running on port", PORT);
});