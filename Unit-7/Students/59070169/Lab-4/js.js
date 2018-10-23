var count = 0;

setInterval(function addChild(){
	if (count < 10) {
		battery = document.querySelector('.battery');
		child = document.createElement('div');
		battery.appendChild(child);
		count++;
		if (count < 5) {
			battery.classList.add('red');
		}
		else if (count < 9) {
			battery.classList.add('orange');
		}
		else {
			battery.classList.add('green');
		};
	}
},500);
