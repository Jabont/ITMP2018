
var btt = 0;
setInterval(function addChild(){ 
	if (btt < 10) {

		battery = document.querySelector('.battery');
		child = document.createElement('div');
		battery.appendChild(child);		
		btt++;
		if (btt < 3) {
		 battery.classList.add('red');	
		}else if (btt < 7) {
			 battery.classList.add('orange');	
		}else{
			 battery.classList.add('green');	
		};

	}
}, 500);