var x = 0;
function addChild(){
	battery = document.querySelector('.battery');
	child = document.createElement('div');
	child.classList.add('child');
	if (x<10) {
		battery.appendChild(child);
		x++
		if (x<3) {
			battery.classList.add("red");
		}
		else if (x<7 && x>3) {
			battery.classList.add("orange"); 
		}
		else if (x<10 && x>7) {
			battery.classList.add("green");
		}
		}

}
charge = setInterval(function(){ 
	if (x<10){
		addChild();
	}
	else {
		alert("Emptyn\'t");
		clearInterval(charge);
	}

	}, 1000);

	
