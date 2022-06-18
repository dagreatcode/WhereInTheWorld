// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const inquirer = require("inquirer");
const fs = require("fs");
const http = require("http");
// const express = require("express");
const PORT2 = process.env.PORT || 3002;

const app = http.createServer();
const figlet = require("figlet");

figlet('Administrator!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
	consoleApp();
});

function consoleApp() {
	app.listen(PORT2, () => {
		console.log(`App is running on http://localhost:${PORT2}`);
		handleRequest();
	});
}

function handleRequest() {
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
			figlet.text(response.username, {
				font: 'Ghost',
				horizontalLayout: 'default',
				verticalLayout: 'default',
				width: 80,
				whitespaceBreak: true
			}, function(err, data) {
				if (err) {
					console.log('Something went wrong...');
					console.dir(err);
					return;
				}
				console.log(data);
			});
			// console.log(response.username);
			fs.appendFile("log.txt", response.username + "\n", function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Name logged!");
				}
			});
			fs.appendFile(
				"log.json",
				JSON.stringify(response.username) + "\n",
				function (err) {
					if (err) {
						console.log(err);
					} else {
						console.log("Name logged!");
					}
				}
			);
		});
}

module.exports = consoleApp;

// module.exports = {
//   handleRequest: handleRequest,
// };
