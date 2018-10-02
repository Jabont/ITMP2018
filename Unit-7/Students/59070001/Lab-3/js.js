b = document.querySelectorAll('div');
first = 270;
allb = b.length;
second = first;
n = first / (allb-1);
for (i = 0; i<b.length; i++) {
	console.log("i = " + i);
	b[i].style.background = "hsl("+(second)+",100%,80%)";
	second = second - n;
	
	console.log("color = "+ second);
};