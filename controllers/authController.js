require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
// TODO: Fix the return password to match. maybe reverse hash to match login password.
// "Sign Up"

router.post("/api/signup", (req, res) => {
  const { email, password, typeOfUser } = req.body;
  // console.log(req.body[0].email);
  // console.log(req.body.email, req.body.password)
  if (!email.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        // console.log(hashedPassword);
        db.User.create({
          email: email,
          password: hashedPassword,
          typeOfUser: typeOfUser,
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
            res.json(newUser);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to signup.",
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

// "Login"

router.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        // TODO: if too many failed attempts to login.
        bcrypt
          .compare(password, foundUser.password)
          .then(function (result) {
            // console.log("The password match: ", result);
            if (result) {
              // TODO: Send a jwt back as data instead.
              // TODO: lock down the token in a time limit
              // TODO: Something needs to be on the back end paying attention
              const token = jwt.sign(
                { email: foundUser.email },
                process.env.SECRET
              );
              res.json({
                err: false,
                data: token,
                message: "Successfully logged in.",
              });
            } else {
              res.status(401).json({
                err: true,
                data: null,
                message: "Failed to sign in",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              err: true,
              data: null,
              message: "Failed to sign in",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to sign in",
      });
    });
});

export default router;
