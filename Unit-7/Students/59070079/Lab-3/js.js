b = document.querySelectorAll('div');
purple = 270;
bg = purple;
card = document.querySelectorAll('.card');

for (i = 0; i < b.length; i++) {
	b[i].style.background = "hsl("+ bg +", 100%, 80%)";
	bg = bg - (270/(b.length - 1));
};
dex = 10;
for (i = 0; i < card.length; i++) {
	card[i].style.borderRadius = dex + "px";
	dex = dex + 10;
};

