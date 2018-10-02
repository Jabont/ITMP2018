b = document.querySelectorAll('div');
purple = 270;
count = b.length;
d = purple / (count-1);

card = document.querySelectorAll('.card');
round = card[0].getAttribute('round');
for (i = 0; i < card.length; i++) {
	card[i].style.borderRadius = round + 'px';
}

for (i = 0 ; i<b.length; i++) {
	b[i].style.background = "hsl("+purple+",100%,50%)";
	purple = purple - d ;
	console.log(b[i]);
};