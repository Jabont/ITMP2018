
username = prompt('What is your name?');

setInterval(function() {

	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();


	if (h <= 12) {
		greeting = "Good Morning, " + username;
		bg.style.backgroundImage  ="url(src/Morning.jpg)";
	} else if (h <= 18) {
		greeting = "Good Evening, " + username;
	} else {
		greeting = "Good Night, " + username;
	}

	
	document.title = greeting;
	// greet = greeting; <-- Why it not work?
	document.querySelector('#greet').innerText = greeting;

	time.innerText = h+" : "+m+" : "+s;

}, 1000);
