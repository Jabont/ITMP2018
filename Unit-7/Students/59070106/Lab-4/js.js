var num =0;
function addChild(){
	if (num < 10) {
	 if(num < 4){
	parent = document.querySelector('.battery');
	child = document.createElement('div');
	parent.classList.add('red');
	parent.appendChild(child);
	num++;

	}
	else if(num <= 6){
	parent = document.querySelector('.battery');
	child = document.createElement('div');
	parent.classList.add('orange');
	parent.appendChild(child);
	num++;
	}
	else{
	parent = document.querySelector('.battery');
	child = document.createElement('div');
	parent.classList.add('green');
	parent.appendChild(child);
	num++;
	}

	}
	else{
		alert("Too much Charge!");
	}	

}

Charger = setInterval(function(){ 
	if (num <10) {
		addChild();
	}



}, 1000);