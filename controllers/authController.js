const express = require("express");
const router = express.Router();
const db = require("../models");

// "Sign Up"

router.post("/api/signup", ({ email, password }, res) => {
  if (!email.trim || !password.trim) {
    res.status(400);
  } else {
    db.User.create({
      email: email,
      password: password,
    })
      .then((newUser) => {
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
  }
});

// "Login"

module.exports = router;
