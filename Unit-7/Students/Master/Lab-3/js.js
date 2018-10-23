b = document.querySelectorAll('div');
purple = 270;
bg = purple;
for (i = 0; i<b.length; i++) {
	console.log("i = "+i);
	console.log(bg);
	b[i].style.background = "hsl("+bg+",100%,80%)";
	bg = bg - (270/(b.length-1));
};

card = document.querySelectorAll('*[round]')

for (var k = 0; k < card.length; k++) {
	r = card[k].getAttribute('round');
	card[k].style.borderRadius = r+"px";
};