color=0;
count = 0;
function addChild(){
	parent = document.querySelector('.battery');
	child = document.createElement('div');
	// if(count < 3){
	// 	parent.classList.add('red');
	// 	parent.appendChild(child);
	// 	count+=1;
	// }
	// else if (count < 6){
	// 	parent.classList.add('orange');
	// 	parent.appendChild(child);
	// 	count+=1;

	// }
	// else if (count < 10){
	// 	parent.classList.add('green');
	// 	parent.appendChild(child);
	// 	count+=1;

	// }
	if(count < 10){
	b = document.querySelectorAll('div.battery');
		for (i = 0; i<b.length;i++){
			b[i].style.background = "hsl("+color+",100%,65%)";
			color+= 15;
			
		};
		parent.appendChild(child);
		count+=1;
	}
}