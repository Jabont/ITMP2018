//function addChild(){
	//battery = document.querySelector('.battery');
	//f_battery = document.createElement('div');
	//battery.appendChild(f_battery);
//}

var btt = 0;
function addChild() {
	if (btt < 9) {
		parent = document.querySelector('.battery');
		child = document.createElement('div');
		
		if (btt < 3) {
			parent.classList.add('red');
		}
		else if (btt >= 3 && btt < 6) {
			parent.classList.add('orange');
		}
		else {
			parent.classList.add('green');
		}
		parent.appendChild(child);
		btt++;
	}
}

charger = setInterval(function() {
	if (btt < 9) {
		addChild();
	}
}, 500)