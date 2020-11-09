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
        res.status(500).send({
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
            res.status(403).send({
              error: "User Already Exists",
            });
          } else {
            User.findOne({ email: email }, function (err, user) {
              if (err) {
                res.status(500).send({
                  error: "Internal Server Error",
                });
              } else {
                res.send({
                  user: newUser.toJSON(),
                  token: jwtSignUser(newUser.toJSON()),
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
        res.status(403).send({
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
              res.status(403).send({
                error: "Invalid Password",
              });
            }
          }
        });
      }
    });
  },
};
