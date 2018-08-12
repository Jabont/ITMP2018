username = prompt('What your father name!');
document.querySelector('h1').innerText += ' '+ username.toUpperCase();

setInterval(function(){
	let d = new Date(); 
	let hr = d.getHours(); 
	let min = d.getMinutes(); 
	let sec = d.getSeconds(); 
	let date = d.getDate();
	let month = d.getMonth();
	let year = d.getFullYear(); 
	let day = d.getDay();
	let month_t = ["Januray","February","March","April","May","June","July","August","September","October","November","December"]
	let day_t = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
	if (day == 0) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'yellow';
	}

	else if (day == 1) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'pink';
	}

	else if (day == 2) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'green';
	}

	else if (day == 3) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'orange';
	}

	else if (day == 4) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'blue';
	}

	else if (day == 5) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'purple';
	}

	else if (day == 6) {
		show_day.innerText = day_t[day];
		document.querySelector('#show_day').style.color = 'red';
	}
	show_h.innerText = hr + "  Hour";
	show_m.innerText = min + "  Minute";
	show_s.innerText = sec + "  Second";
	show_date.innerText = date;
	show_month.innerText = month_t[month];
	show_year.innerText = year;

	},500)