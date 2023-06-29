let mongoose = require("mongoose");
let bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv-flow').config();

// const asyncHandler = require("express-async-handler");

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
        // res.json({ success: "Login Successful", user: user });
        // res.json({ success: "Login Successful", user: user, token: jwt.sign({ username: user.email, _id: user._id }, 'RESTFULAPIs') });
        const token = jwt.sign(
          { user: {username: user.email, _id: user._id}}, 
          process.env.REACT_APP_ACCESS_TOKEN_SECRET,
          { expiresIn: "1m" }, 
          // 'RESTFULAPIs'
        );
        res.set('Authorization', `Bearer ${token}`);
        console.log("Response headers: ", res.getHeaders("authorization"));
        // console.log("Response headers: ", res.headers["authorization"]);
        res.json({ success: "Login Successful", user: user, token: token });

        // return res.json({ token: jwt.sign({ username: user.email, _id: user._id }, 'RESTFULAPIs') });
        // return res.json({ token: jwt.sign({ email: user.email }, 'RESTFULAPIs') });
      } else {
        console.log("Login Failed");
        res.json({ error: "Invalid Login" });
      }
    } catch (error) {
      console.log("loginUser error: ", error);
      res.json({ error: "User login error" });
    }
  },
  
  loginRequired: async function(req, res, next) {
    if (req.user) {
      res.json(req.user);
      next();
    }
    else {
      // res.json({ error: "Unauthorized User" });
      res.json(req.user);
      // res.json({ error: req.body._id });
    }
  },

  profile: function(req, res, next) {
    // const user = User.findOne({ username: req.body.username });
    if (req.user) {
      res.send(req.body._id);
      res.json({ message: user.username });
      next();
    }
    else {
      res.json({ error: "Invalid Token" });
      // res.json({ error: req.body._id });
    }
  },

  validateToken: (async function(req, res, next) {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorizaton;
    // console.log(authHeader);
    console.log("Reqest headers", req.get("Authorization"));
    console.log("Reqest headers", req.headers);
    console.log("Start");
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
            req.user = decoded.user;
            next();
        });
        if(!token) {
            res.status(401);
            throw new Error("User not authorized or token is missing");
        }
        else {
          console.log("Success?");
        }
    }
    else {
        next();
    }
    console.log("End");
  })
};
