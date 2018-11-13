var btt=0;
function addChild(){
	if (btt<10) {
	parent = document.querySelector('.battery');
	child = document.createElement('div');
	parent.appendChild(child);
	btt++;
		if(btt<5){
			parent.classList.add('red');
		}
		else if(btt<8){
			parent.classList.add('yellow');
		}
		else{
			parent.classList.add('green');
		}
	}
}