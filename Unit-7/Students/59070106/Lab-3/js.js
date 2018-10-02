b = document.querySelectorAll('div');

purple = 275;
a = b.length;
for (i = 0; i<b.length; i++) {
	
	if (i == a-1) {
	red = 5;
	b[i].style.background = "hsl("+(red)+",100%,80%)";
	}
	else{
	b[i].style.background = "hsl("+(purple)+",100%,80%)";
	}
	purple = purple - (270/(b.length )); 
	
};
card =document.querySelectorAll('.card');
for (j = 0; j < card.length ; j++) {
	card[j].style.borderRadius = card[j].getAttribute('round')+"em";

};

