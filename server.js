require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const UserController = require("./controllers/UsersController");
const AuthController = require("./controllers/authController");
const { createProxyMiddleware } = require('http-proxy-middleware');
// const app.use(bodyParser.json());
// const ConsoleApp = require("./consoleApp/consoleApp");
// const bodyParser = require("bodyParser")
const PORT = process.env.PORT || 3001;

const app = express();
// const con = ConsoleApp.test();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whereintheworld_db",
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

app.use("/api/user",UserController);
app.use(AuthController);

// TODO: Add console app.

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
);
// app.post("/api/users", (req, res) => {
//   var newUser = req.body;
//   console.log(newUser);
//   users.push(newUser);
//   res.json(newUser);
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
