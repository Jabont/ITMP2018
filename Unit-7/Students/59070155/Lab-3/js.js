b = document.querySelectorAll('div');
card = document.querySelectorAll('.card')
bg = 0;
for (i = 0; i<b.length; i++) {
	b[i].style.background = "hsl("+(275-(i*bg))+",100%,80%)"
	bg = (270/b.length);
};
for (i = 0; i<card.length; i++) {
	r = card[i].getAttribute('round');
	card[i].style.borderRadius = r/5+"px";
};