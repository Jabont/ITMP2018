b = document.querySelectorAll('div');
card = document.querySelectorAll('.card')
purple = 270;
bg = purple;
for (i = 0; i<b.length; i++) {
	console.log("i = "+i);
	console.log(bg);
	b[i].style.background = "hsl("+bg+",100%,80%)";
	bg = bg - (270+(b.length-1));
}
for (i = 0; i < card.length; i++) {
	card[i].style.borderRadius = card[i].getAttribute('round')+"em";
};
;