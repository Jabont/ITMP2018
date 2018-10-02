b = document.querySelectorAll('div');
purple = 275;
a = b.length;
for (i = 0; i<b.length; i++) {
	purple -= 10;
	
	if (b[i] == a-1) {
	red = 100;
	b[i].style.background = "hsl("+(red)+",100%,80%)";
	}
	else{
	b[i].style.background = "hsl("+(purple)+",100%,80%)";
	}
	
};