require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

router.post("/api/login", (req, res) => {
  const data = req.body;
  const email = data.email;
  const password = data.password;

  db.User.findOne({ email: email })
    .then((foundUser) => {
      console.log("From Site", data); //Body
      console.log("From Database", foundUser); //Database

      if (foundUser) {
        // TODO: if too many failed attempts to login.
        bcrypt

          .compare(data.password, foundUser.password)
          .then(function (result) {
            console.log("password:", password);
            console.log("Found User Password:", foundUser.password);
            console.log("The password match result: ", result);
            if (result) {
              const token = jwt.sign(
                { email: foundUser.email },
                process.env.SECRET
              );
              console.log("Token:", token);
              res.json({
                err: false,
                data: token,
                message: "Successfully logged in.",
              });
            } else {
              res.status(401).json({
                err: true,
                data: null,
                message: "Failed to sign in with result",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              err: true,
              data: null,
              message: "Failed to comp pass",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to find auth email",
      });
    });
});

router.post("/api/signUp", (req, res) => {
  const data = req.body;
  const email = data.email;
  const password = data.password;

  if (!email || !password) {
    res.status(400);
  } else {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        db.User.create({
          email: req.body.email,
          password: hashedPassword,
        })
          .then((newUser) => {
            const token = jwt.sign(
              { email: newUser.email },
              process.env.SECRET
            );
            res.json({
              err: false,
              data: token,
              message: "Successfully signed up.",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to signUp.",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Password?",
        });
      });
  }
});

module.exports = router;
