console.log("js is working");

var quotes =["It ain't about the plane. It's about the pilot", "duck twelve", "Hey, here's a nickel. Go buy yourself five pennies", "You tryna grub?", "Ayyy", "I am having a spiritual experience"]

var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var resume = document.getElementById("resume");
var email = document.getElementById("email");
var quoteText = document.getElementById("quoteText");

window.onload = function() {
	var chosen = Math.floor(Math.random() * quotes.length);
	quoteText.innerHTML = quotes[chosen];
}

email.onmouseover = function() {
	email.className = "fas fa-envelope fa-spin";
}

email.onmouseleave = function() {
	email.className = "fas fa-envelope";
}

github.onmouseover = function() {
	github.className = "fab fa-github fa-spin";
}

github.onmouseleave = function() {
	github.className = "fab fa-github";
}

resume.onmouseover = function() {
	resume.className = "far fa-file-alt fa-spin";
}

resume.onmouseleave = function() {
	resume.className = "far fa-file-alt";
}

linkedin.onmouseover = function() {
	linkedin.className = "fab fa-linkedin fa-spin";
}

linkedin.onmouseleave = function() {
	linkedin.className = "fab fa-linkedin";
}