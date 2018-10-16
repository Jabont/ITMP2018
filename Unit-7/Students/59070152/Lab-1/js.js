hue = 20;

function addChild(){
	parent = document.querySelector('.parent');
	child = document.createElement('div');
	child.classList.add('child');
	child.style.background = "hsl("+hue+",100%,70%)";
	parent.appendChild(child);
	hue += 20;
	if (hue >= 360){
		hue = 0;
	}
}