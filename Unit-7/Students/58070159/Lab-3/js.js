b = document.querySelectorAll('div');
len = b.length;
running = 0;
setInterval(function() {
	for (i=0; i<len; i++) {
		// b[i].style.background = "hsl("+(i*5)+",100%,80%)"
		b[i].style.background = "hsl("+((270-(270/(len-1))*i+running)%360)+",100%,50%)";
	}
	running += 5;
}, 25);


round = document.querySelectorAll('*[round]');
for (i=0; i<round.length; i++) {
	round[i].style.borderRadius = round[i].getAttribute('round')+"px";
}

