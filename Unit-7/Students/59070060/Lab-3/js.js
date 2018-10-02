b = document.querySelectorAll('div');
color = 0;
for(i= 0; i< b.length; i++){
	console.log(i);
	b[i].style.background = "hsl("+color+",100%,80%)";
	color +=(i+90);
}