b = document.querySelectorAll('div');
for (i = 0; i<b.length; i++) {
	color = 275;
	h_num = (400/b.length)-1;
	color_hsl = color-(h_num*i);
	b[i].style.background = "hsl("+color_hsl+",100%,80%)"
};

card = document.querySelectorAll('.card');
for (j = 0; j<card.length; j++){
	card_round = card[j].getAttribute('round');
	card[j].style.borderRadius = ""+card_round+"px";
};

