function addChild(){
	console.log('addChild')
	bat10p = document.createElement('div');
	batShow = document.querySelector('.battery');
	count = batShow.childElementCount;
	console.log(count)
	if(count < 10) {
		batShow.appendChild(bat10p);
		// batShow.style.background = "hsl("+count*36+",100%,50%)"
		if(count <= 3) {
			batShow.setAttribute('class', 'battery red');
		} else if(count <= 6) {
			batShow.setAttribute('class', 'battery orange');
		} else {
			batShow.setAttribute('class', 'battery green');
		}
	} else {
		batShow.innerHTML = '';
		// batShow.style.backgroundColor = "hsl("+count*36+",100%,50%)"
	}
}

setInterval(addChild, 400);