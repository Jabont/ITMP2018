b = document.querySelectorAll('div');
card = document.querySelectorAll('.card');

purple = 270; bg=0; 
for (i = 0; i<b.length; i++) {
	b[i].style.background = "hsl("+(purple-bg)+",100%,80%)";
	bg = bg+10;
};
for (i = 0; i<card.length; i++) {
	b[i].style.background = "hsl("+(purple-bg)+",100%,80%)";
	card[i].style.borderRadius = card[i].getAttribute('round') + "px";

};


