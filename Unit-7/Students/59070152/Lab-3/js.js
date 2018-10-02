b = document.querySelectorAll('div');
bg = 270;
for (i = 0; i<b.length; i++) {
	console.log(bg);
	b[i].style.background = "hsl("+(bg)+",100%,50%)"
	bg = bg - (270 / (b.length - 1));
};