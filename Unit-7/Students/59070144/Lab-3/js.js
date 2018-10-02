b = document.querySelectorAll('div');
purple = 270
stack = 270/b.length;
for (i = 0; i < b.length; i++) {
	b[i].style.background = "hsl("+ purple +", 100%, 80%)";
	purple -= stack;
}

// card = document.querySelectorAll('.card');
// for (j = 0; j < card.length; j++) {
// 	r1 = card[i].getAttribute('round');
// 	card[i].style.borderRadius = r1/5+"px"
// }

d = document.querySelectorAll('*[round]')
for (k = 0; k < d.length; k++) {
	r2 = d[k].getAttribute('round');
	d[k].style.borderRadius = r2/5+"px"
}