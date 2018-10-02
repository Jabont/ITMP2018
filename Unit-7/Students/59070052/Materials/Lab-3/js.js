b = document.querySelectorAll('div');
color = 0;
plus = 360 / b.length;
for (i = 0; i<b.length;i++){
	b[i].style.background = "hsl("+color+",100%,80%)";
	color += plus;

};
