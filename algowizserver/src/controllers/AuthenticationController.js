const models = require("../models");
const bcrypt = require("bcrypt");
const config = require("../config");
const jwt = require("jsonwebtoken");

function jwtSignUser(user) {
  return jwt.sign({ id: user._id }, config.authentication.jwtSecret);
}

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 5, function (err, hash) {
      if (err) {
        res.send({
          error: err,
        });
      } else {
        User = models.User;
        const email = req.body.email;
        const name = req.body.name;
        const newUser = new User({
          name: name,
          email: email,
          password: hash,
        });
        newUser.save(function (err) {
          if (err) {
            res.send({
              message: "User Already Exists",
            });
          } else {
            User.findOne({ email: email }, function (err, user) {
              if (err) {
                res.send({
                  message: "Internal Server Error",
                });
              } else {
                res.send({
                  message: "Sign Up Successfull, Please Login to Continue"
                });
              }
            });
          }
        });
      }
    });
  },
  login(req, res) {
    const { email, password } = req.body;
    User = models.User;
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (!user) {
        res.send({
          error: "User not found",
        });
      } else {
        bcrypt.compare(password, user.password, function (err, isMatch) {
          if (err) {
            console.log(err);
          } else {
            if (isMatch) {
              res.send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON()),
              });
            } else {
              res.send({
                error: "Invalid Password",
              });
            }
          }
        });
      }
    });
  },
};
