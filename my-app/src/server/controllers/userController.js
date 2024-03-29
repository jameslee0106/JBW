let mongoose = require("mongoose");
let bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// Models
let User = mongoose.model("User");

module.exports = {
  index: function(req, res) {
    console.log("Client request index");
    console.log("Client header: ", req.headers);
    res.json("Error 500 - Internal Server Error");
  },

  newUser: async function (req, res) {
    console.log("Client request newUser");
    console.log("Client header: ", req.headers);

    await User.findOne({ username: req.body.username })
      .then((user) => {
        if (user) {
          console.log(
            "newUser error: User exists\n",
            "Request Body:",
            req.body,
            "\nUser From DB: ",
            user
          );
          res.json({ error: "User exists" });
        } else {
          if (Object.keys(req.body).length > 0) {
            if (req.body.password.length < 5) {
              res.json({
                message: "New User error",
                error: "Password must be at least 5 characters in length",
              });
            } else {
              bcrypt.hash(req.body.password, 10)
                .then((hashedPass) => {
                  var user = new User();
                  user.username = req.body.username;
                  user.password = hashedPass;
                  return user.save();
                })
                .then((user) => {
                  console.log("newUser success");
                  res.json({ success: "Registration successful", user: user });
                })
                .catch((err) => {
                  console.log("newUser error ", err);
                  console.log("User: ", user);
                  res.json({ error: "Unable to create new user" });
                });
            }
          } else {
            console.log("newUser error no request body provided ");
            res.json({ error: "An Error Occurred While Creating an Account" });
          }
        }
      })
      .catch((err) => {
        console.log("newUser error: ", err);
        res.json({ error: "Error occurred while adding new user" });
      });
  },

  loginUser: async function(req, res) {
    console.log("Client request loginUser");
    console.log("Client header: ", req.headers);
  
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) {
        console.log("loginUser null: ", user);
        console.log("User value: ", user);
        res.json({ error: "Invalid login" });
        return;
      }
  
      const check = await bcrypt.compare(req.body.password, user.password);
  
      if (check) {
        console.log("Login Success: ", check);
        // console.log("User email", user._id);
        const token = jwt.sign(
          { user: { _id: user._id, username: user.username }}, 
          process.env.TOKEN_SECRET,
          { expiresIn: "1m" }, 
        );
                
        res.set('Authorization', `Bearer ${token}`);
        console.log("Response headers: ", res.getHeaders("authorization"));
        res.json({ success: "Login Successful", user: user, token: token });

      } else {
        console.log("Login Failed");
        res.json({ error: "Invalid Login" });
      }
    } catch (error) {
      console.log("loginUser error: ", error);
      res.json({ error: "User login error" });
    }
  },
  
  profile: function(req, res) {
    // console.log("Profile user", req.user);

    if (req.user) {
      res.json({ message: req.user });
    }
    else {
      res.json({ error: "Invalid Token" });
    }
  },
};
