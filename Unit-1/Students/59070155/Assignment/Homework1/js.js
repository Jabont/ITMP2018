username = prompt('What your name!');

document.querySelector("h1").innerText = "Welcome "+username;

setInterval(function(){
		let d = new Date(); 
		let hr = d.getHours(); 
		let min = d.getMinutes(); 
		let sec = d.getSeconds();

		show_time.innerText = hr+":"+min+":"+sec;
		if (hr<12 && hr>=6) {
			greeting.innerText="Good Morning"
		}
		else if(hr<18 && hr>=12) {
			greeting.innerText="Good Afternoon"
		}
		else {
			greeting.innerText="Good Night"
		}
	},1000)
