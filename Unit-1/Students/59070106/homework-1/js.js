username = prompt('What your name?');
head.innerText = 'Welcome' + ' ' + username;

setInterval(function(){
	let value = new Date();
	let hour = value.getHours();
	let min = value.getMinutes();
	let sec = value.getSeconds();

	time.innerText = hour +' : '+ min +' : '+ sec ;
	if (hour>=5 && hour<11) {
		say.innerText = 'Good morning';
	}
	else if (hour>=11 && hour<17) {
		say.innerText = 'Good afternoon';
	}
	else if (hour>=17 && hour<23) {
		say.innerText = 'Good evening';
	}
	else {
		say.innerText = 'Good night';
	}
},1000)

