let mongoose = require("mongoose");
let bcrypt = require("bcrypt");

// Models
let User = mongoose.model("User");

module.exports = {
  newUser: function (req, res) {
    console.log("Client request newUser");
    console.log("Client header: ", req.rawHeaders);

    User.findOne({ username: req.body.username })
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
            if (req.body.password.length < 8) {
              res.json({
                message: "New User error",
                error: "Password must be at least 8 characters in length",
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
};
