const express = require("express");
const app = express()
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

const UserSchema = new mongoose.Schema({
    username: {type: String,
                required:[true, "username must be provided"]
    },
    password: {type: String,
                required:[true, "password must be provided"]
    }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// baseURL = "mongodb+srv://roof558:0512@jbw.1vqbwn6.mongodb.net/?retryWrites=true&w=majority"
const main = require("./server/main.js");

app.post("api/user/new", function(req, res) {
    main.newUser(req, res);
});

require("./server/routes.js")(app)

app.listen(3000, function() {
    console.log("Server running on port 3000");
});