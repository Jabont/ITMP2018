
username = prompt('Enter your name');
document.querySelector('h2').innerText = username + ".";
setInterval(function(){
		let d = new Date();
		let hr =  d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();
		let text;
		if (hr >= 6 && hr <= 12) {
			text = "GOOD MORNING";
		} else if (hr >= 13 && hr <= 18) {
			text = "GOOD AFTERNOON";
		} else if (hr >= 19 && hr <= 22) {
			text = "GOOD EVENING";
		} else {
			text = "WELCOME";
		}
		document.querySelector('h1').innerText = text;
		document.querySelector("#show_d").innerText = d.getDate();
		document.querySelector("#show_mth").innerText = d.getMonth();
		document.querySelector("#show_y").innerText = d.getFullYear();
		show_h.innerText = checktime(hr);
		show_m.innerText = checktime(min);
		show_s.innerText = checktime(sec);
		function checktime(i){
			if (i < 10) {i = "0" + i;}
			return i;
		}
	},0);
