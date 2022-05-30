var database = [
	{
		username: "Cheryl",
		password: "12345"
	},
	{
		username: "Andy",
		password: "supersecret"
	},
	{
		username: "Bruno",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "Andy",
		timeline: "So tired from all that learning."
	},
	{
		username: "Bruno",
		timeline: "Javascript is so cool!"
	},
	{
		username: "Charlie",
		timeline: "I like chocolate."
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for (var i=0; i < database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass) === true) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password.");
	}
}

signIn(userNamePrompt, passwordPrompt);