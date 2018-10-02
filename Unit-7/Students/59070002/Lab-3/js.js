b = document.querySelectorAll('div');
purple = 270; bg=0;
for (i = 0; i<b.length; i++) {
	b[i].style.background = "hsl("+(purple-bg)+",100%,80%)"
	bg = bg-5;
};