console.log("js is working");

var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var resume = document.getElementById("resume");

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