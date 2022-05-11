app.get("/api/user", (req, res) => {
  db.User.find({}).then((foundUsers) => {
    res.json(foundUsers);
  });
});
app.get("/api/user/:id", (req, res) => {
  db.User.find({ _id: req.params.id }).then((foundUsers) => {
    res.json(foundUsers);
  });
});
app.post("/api/user", (req, res) => {
  db.User.create(req.body).then((newUser) => {
    res.json(newUser);
  });
});
// app.put("/api/user/:id", (req, res) => {
//   db.User.updateOne({_id: req.params.id}, req.body).then(updateUser => {
//     res.json(updateUser);
//   })
// })
app.put("/api/user/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateUser) => {
      res.json(updateUser);
    }
  );
});
app.delete("/api/user/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});
