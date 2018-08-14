username = prompt('Thy name?');
head.innerText = 'greeting ashen one, ' + username;

setInterval(function(){
	let value = new Date();
	let hour = value.getHours();
	let min = value.getMinutes();
	let sec = value.getSeconds();
 	time.innerText = "The time is " + hour +" : "+ min +" : "+ sec;
	},1000) 