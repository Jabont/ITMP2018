couter = 0;

function addChild(){
	if(couter < 100){
		parent = document.querySelector('.battery')
		child = document.createElement('div');
		if(couter < 30){
			parent.classList.add('red');
		}else if(couter < 80){
			parent.classList.add('orange');
		}else{
			parent.classList.add('green');
		}
		parent.appendChild(child);
		couter++
	}
}

function charge(){
	setInterval(addChild, 25);
}