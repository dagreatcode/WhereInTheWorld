// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
// const express = require("express");
const PORT2 = process.env.PORT || 3002;

const app = http.createServer();
const figlet = require("figlet");

const { createSpinner } = require("nanospinner");

// const timeOut  =
// setTimeout(() => {
//   spinner.stop()
// }, 1000)
// const timeOut  =
// setTimeout(() => {
//   spinner.spin()
// }, 1000)
// setInterval(() => {
// 	spinner.spin()
//   }, 25)
// spinner.start()
// spinner.start({ text: 'Start', color: 'yellow' })

// spinner.stop({ text: 'Done!', mark: ':O', color: 'magenta' })
// spinner.success()

figlet("Administrator!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  consoleApp();
});

function consoleApp() {
  app.listen(PORT2, () => {
    console.log(`App is running on http://localhost:${PORT2}`);
    question1();
  });
}

// const spinner = createSpinner('Run test').start().stop({ text: 'Done!', mark: ':O', color: 'magenta' })

const spinner = createSpinner();

// setTimeout(() => {
//   spinner.success()
// }, 1000)
// setInterval(() => {
// 	spinner.spin()
//   }, 25)
//   spinner.start()
// setInterval(() => {
//   spinner.spin();
// }, 1);

function question1() {
  //   spinner.start();
  console.log("Hello Console App");
  //   spinner.start({ text: "Start: ", color: "yellow" });
  //   spinner.stop()
  spinner.warn({ text: "Warning! Admin Only!", mark: ":|" });

  inquirer
    .prompt([
      {
        type: "input",
        message: "name please",
        name: "username",
        default() {
          return "Admin";
        },
      },
    ])
    .then(function (response) {
      figlet.text(
        response.username,
        {
          font: "poison",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        },
        function (err, data) {
          if (err) {
            spinner.error({ text: "Error!", mark: ":(" });
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          spinner.success({ text: "Successful!", mark: ":)" });
          console.log(`Image: ${data}`);
        }
      );
      // console.log(response.username);
      fs.appendFile("log.txt", response.username + "\n", function (err) {
        if (err) {
          spinner.error({ text: "Error!", mark: ":(" });
          console.log(err);
        } else {
          //   console.log("Name logged into txt!");
          //   spinner.start({ text: "Start", color: "yellow" });
          //   spinner.stop();
          spinner.success({ text: "Successful!", mark: ":)" });
          spinner.stop({
            text: "Name logged into txt!",
            mark: ":O",
            color: "magenta",
          });
        }
      });
      fs.appendFile(
        "log.json",
        JSON.stringify(response.username) + "\n",
        function (err) {
          if (err) {
            spinner.error({ text: "Error!", mark: ":(" });
            console.log(err);
          } else {
            spinner.success({ text: "Successful!", mark: ":)" });
            spinner.stop({
              text: "Name logged into json!",
              mark: ":O",
              color: "magenta",
            });
            // console.log("Name logged into json!");
          }
        }
      );
    });
}

// Make console.log change colors from school work

module.exports = consoleApp;

// module.exports = {
//   question1: question1,
// };
