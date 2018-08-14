username = prompt('สวัสดีครับ!! ชื่ออะไรครับ?');
document.getElementById("welcome").innerText = 'สวัสดีครับ' + username;

setInterval(function  () {
		let d = new Date(); 
		let hr = d.getHours(); 
		let min = d.getMinutes(); 
		let sec = d.getSeconds();

		if (hr >= 6 && hr < 9) {
			document.getElementById("welcome").innerText = 'อรุณสวัสดิ์นะครับ ' + username;

		} else if (hr >= 9 && hr < 12) {
			document.getElementById("welcome").innerText = 'สวัสดียามสายครับ ' + username;

		} else if (hr == 12) {
			document.getElementById("welcome").innerText = 'สวัสดียามเที่ยงนะครับ ' + username;

		} else if (hr >= 12 && hr < 16) {
			document.getElementById("welcome").innerText = 'สวัสดียามบ่ายนะครับ ' + username;

		} else if (hr >= 16 && hr < 19) {
			document.getElementById("welcome").innerText = 'สวัสดียามเย็นนะครับ ' + username;

		} else {
			document.getElementById("welcome").innerText = 'ราตรีสวัสดิ์นะครับ ' + username;

		} 
		document.getElementById("time").innerText = 'ขณะนี้เวลา ' + hr + ' นาฬิกา ' + min + ' นาที ' + sec + ' วินาที';
	},1000)