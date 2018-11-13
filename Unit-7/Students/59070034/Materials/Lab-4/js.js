	
var clicks = 0;

function autoCharge(){
	
}

function addChild(){	
	

	if (clicks < 10) {
		clicks += 1;
		battery = document.querySelector('.battery');
		div = document.createElement('div');
		battery.appendChild(div);

		if (clicks < 3){
			battery.classList.add("red");
		}		
		if (clicks >= 3){
			battery.classList.add("yellow");
		}	
		if (clicks > 5){
			battery.classList.add("green");
		}
	}
	else{
		alert("FULL!");
	}

charge = setInterval(function(){
	if (clicks <10){
		addChild();
	}
},1000);



}