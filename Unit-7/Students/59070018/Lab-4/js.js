var i=0;

function addChild(){
	battery = document.querySelector('.battery');
	child = document.createElement('div');
	child.classList.add('child');
	if(i<10){
		battery.appendChild(child);
		i++;
		if(i<3){
			battery.classList.add("red");
		}
		if(i>=3 && i<=6){
			battery.classList.add("orange");
		}
		if(i>6 && i<10){
			battery.classList.add("green");
		}
	}
}

	value = setInterval(function(){
		if(i<10){
			addChild();
		}
	},1000)

