var input = require("readline-sync").question;
var math = require("./functions/math.js");
var help = require("./functions/help.js");

while(true) {
	var answer = input(">");
	console.log(eval(answer));
}
