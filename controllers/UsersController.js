const express = require("express");
const router = express.Router();
const db = require("../models");

// TODO: Add routes to add images to mongoDB for user after sign in.

// Resource Driven API //

// router.get("/", (req, res) => {
//   db.User.find({})
//     .populate("user")
//     .then((foundUsers) => {
//       res.json(foundUsers);
//     });
// });
router.get("/", (req, res) => {
  db.User.find({})
    .then((foundUsers) => {
      res.json(foundUsers);
    })
    // .catch((err) => {
    //   console.log(err);
    //   res.json({
    //     error: false,
    //     data: foundUsers,
    //     message: "Found Users.",
    //   });
    // });
});

router.get("/:id", (req, res) => {
  db.User.find({ _id: req.params.id }).then((foundUsers) => {
    res.json(foundUsers);
  });
});

router.post("/", (req, res) => {
  db.User.create(req.body).then((newUser) => {
    res.json(newUser);
  });
});
// app.put("/api/user/:id", (req, res) => {
//   db.User.updateOne({_id: req.params.id}, req.body).then(updateUser => {
//     res.json(updateUser);
//   })
// })
router.put("/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateUser) => {
      res.json(updateUser);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

//Test
// const users = {
//   username: "Vincent",
// }

// router.get("/api/users", (req, res) => {
//   return res.json(users);
// });

module.exports = router;
