b = document.querySelectorAll('div');
c = document.querySelectorAll('.card');

first = 270;
allb = b.length;
second = first;
n = first / (allb-1);
for (i = 0; i<b.length; i++) {
	console.log("i = " + i);
	b[i].style.background = "hsl("+(second)+",100%,80%)";
	second = second - n;
	console.log("color = "+ second);


};

for (i = 0; i<c.length; i++){
	round = c[i].getAttribute('round');
	c[i].style.borderRadius = round + 'px';
}

