b = document.querySelectorAll('div');
first = 300
b2 = b.length 
p2 = first
for (i = 0; i<b.length; i++) {
	console.log("i = " + i)
	b[i].style.background = "hsl("+(first)+",100%,80%)"
	p2 = p2 - b2
	first = p2 
	console.log("color = "+ p2)
};