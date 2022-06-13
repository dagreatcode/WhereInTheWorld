const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require('jsonwebtoken');
// TODO: Add routes to add images to mongoDB for user after sign in.

// Resource Driven API //

router.get("/force", (req, res) => {
  db.User.find({})
    // .populate("user")
    .then((foundUsers) => {
      res.json(foundUsers);
    }).catch((err) => {
      console.log(err);
      console.log("error when retrieving all");
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all users.",
      });
    });
});

router.get("/", (req, res) => {
  db.User.find({})
    // .populate("user")
    .then((foundUsers) => {
      res.json(foundUsers);
    });
});

// TODO:  Get this route working as soon as you finish the last thing.. // FIXME: Dont waste time on this anymore. The err is sonWebTokenError: invalid token  // TODO:
router.get("/admin", (req, res) => {
  const authorization = req.headers;
  const BEAR = req.headers.authorization
  if(BEAR == null) return res.sendStatus(401)
  // const secret = process.env.SECRET;
  // const headerValue = req.headers["authorization"];
  // const headerValue = req.headers['authorization'];
  // const header = { authorization: headerValue };
  // const header = JSON.stringify(req.headers)
  const head = JSON.stringify(req.headers.authorization);

  // console.log(JSON.stringify(req.headers.authorization));
  console.log(req.headers.authorization);
  // console.log(authorization[0]);
  // console.log(req.headers.split(' ')[1]);
  console.log(JSON.stringify(BEAR));
  console.log(BEAR);

  // console.log(req.headers.authorization);
  if (!authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized.",
    });
  }
  // const token = jwt.verify(
  //   ' authorization: req.headers.authorization ',
  //   process.env.SECRET
  // );
  // console.log(token);
  jwt.verify(head, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(req.headers);
      console.log(decoded);
      console.log(err);
      console.log("error getting token");
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      console.log(decoded);

      db.User.find({})
        .then((foundUsers) => {
          res.json(foundUsers);
        })
        .catch((err) => {
          console.log(err);
          console.log("error when decoding token");
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve all users.",
          });
        });
    }
  });
});

// router.get("/", (req, res) => {
//   console.log(req.headers);
//   if (!req.headers.authorization) {
//     return res.status(401).json({
//       error: true,
//       data: null,
//       message: "Unauthorized.",
//     });
//   }
//   jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
//     if (err) {
//       console.log(err);
//       return res.status(401).json({
//         error: true,
//         data: null,
//         message: "Invalid token.",
//       });
//     } else {
//       console.log(decoded);
//       db.User.find({})
//         .then((foundUsers) => {
//           res.json(foundUsers);
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({
//             error: true,
//             data: null,
//             message: "Failed to retrieve all books.",
//           });
//         });
//       // .catch((err) => {
//       //   console.log(err);
//       //   res.json({
//       //     error: false,
//       //     data: foundUsers,
//       //     message: "Found Users.",
//       //   });
//       // });
//     }
//   });
// });
router.get("/:id", (req, res) => {
  db.User.findOne({ _id: req.params.id }).then((foundUsers) => {
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
