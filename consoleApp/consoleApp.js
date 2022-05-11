const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
const express = require("express");
const PORT2 = process.env.PORT || 3002;

const app = express(test());

app.listen(PORT2, () => {
    console.log(`App is running on http://localhost:${PORT2}`);
});

function test() {
  console.log("Hello Console App");
  inquirer
  .prompt([
    {
      type: "input",
      message: "name please",
      name: "username",
    },
  ])
  .then(function (response) {
    console.log(response.username);
    fs.appendFile("log.txt", JSON.stringify(response.username) + "\n", function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Name logged!");
      }
    });
  });
}



module.exports = {
  test: test,
};
