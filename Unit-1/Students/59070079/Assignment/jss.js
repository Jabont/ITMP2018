username = prompt('What your name?');
head.innerText = 'Welcome ' + username;

setInterval(function  () {
	let d = new Date();
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();

	time.innerText = 'This time is '+ hr + ':' + min + ':' + sec;
	if (hr >= 6 && hr < 12) {
		hello.innerText = 'Good moring! have a nice day.';
	}
	else if (hr >= 12 && hr < 17) {
		hello.innerText = 'Good afternoon! have a nice day.';
	}
	else if (hr >= 17 && hr < 21) {
		hello.innerText = 'Good evening! have a nice day.';
	}
	else {
		hello.innerText = 'Good night! have a nice day.';
	}

},1000)