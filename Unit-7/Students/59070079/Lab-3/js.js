b = document.querySelectorAll('div');
purple = 270;
bg = purple
for (i = 0; i < b.length; i++) {
	b[i].style.background = "hsl("+ (bg) +", 100%, 80%)";
	bg = bg - (270/(b.length - 1));
};

