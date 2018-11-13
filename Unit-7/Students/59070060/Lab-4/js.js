count = 0;
function addChild(){
	parent = document.querySelector('.battery');
	child = document.createElement('div');

	if(count < 3){
		parent.classList.add('red');
		parent.appendChild(child);
		count++;
	}
	else if(count < 7){
		parent.classList.add('orange');
		parent.appendChild(child);
		count++;
	}
	else if(count < 10){
		parent.classList.add('green');
		parent.appendChild(child);
		count++;
	}
}