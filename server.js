require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const ConsoleApp = require("./consoleApp/consoleApp");
const db = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();
// const con = ConsoleApp.test();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whereintheworld",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// var users = [
//   {
//     username: "Vincent Kendrick",
//   },
// ];

app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });
// app.post("/api/users", (req, res) => {
//   var newUser = req.body;
//   console.log(newUser);
//   users.push(newUser);
//   res.json(newUser);
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Resource Driven API //
//////////////////////////////////////////////////////////

app.get("/api/user", (req, res) => {
  db.User.find({}).then(foundUsers => {
    res.json(foundUsers);
  })
})
app.get("/api/user/:id", (req, res) => {
  db.User.find({_id: req.params.id}).then(foundUsers => {
    res.json(foundUsers);
  })
})
app.post("/api/user", (req, res) => {
  db.User.create(req.body).then(newUser => {
    res.json(newUser);
  })
})
// app.put("/api/user/:id", (req, res) => {
//   db.User.updateOne({_id: req.params.id}, req.body).then(updateUser => {
//     res.json(updateUser);
//   })
// })
app.put("/api/user/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, {new: true }).then(updateUser => {
    res.json(updateUser);
  })
})
app.delete("/api/user/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id).then(result => {
    res.json(result);
  })
})

//////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
