i = 0;
function addChild(){
	if (i<10) {
		parent = document.querySelector('.battery');
		child = document.createElement('div');
		parent.appendChild(child);
		i++;
	};
	if(i<5){
		parent.classList.add('red');
	}
	else if(i<8){
		parent.classList.add('orange');
	}
	else{
		parent.classList.add('green');
	}
}
setInterval(function(){
	if (i<10) {
		parent = document.querySelector('.battery');
		child = document.createElement('div');
		parent.appendChild(child);
		i++;
	};
	if(i<5){
		parent.classList.add('red');
	}
	else if(i<8){
		parent.classList.add('orange');
	}
	else if(i<10){
		parent.classList.add('green');
	}
	else{
		location.reload();
	}
},1000)