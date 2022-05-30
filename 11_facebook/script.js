var database = [
	{
		username: "Cheryl",
		password: "12345"
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

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!")
	}
}

signIn(userNamePrompt, passwordPrompt)