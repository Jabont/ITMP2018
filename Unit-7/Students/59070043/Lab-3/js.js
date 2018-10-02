b = document.querySelectorAll('div');
bg = 270;
setInterval(function(){
	bg = bg - 1;
	for (i = 0; i<b.length; i++) {
		console.log(bg);
		b[i].style.background = "hsl("+(bg)+",100%,75%)"
		bg = bg - (270 / (b.length - 1));
	};
	if (bg == 0){
		bg = 270;
	}
},100)