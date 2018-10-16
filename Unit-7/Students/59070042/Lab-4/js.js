count = 0;

// On click
// function addChild(){
// 	if (count<10) {
// 		parent = document.querySelector('.battery');
// 		child = document.createElement('div');
// 		parent.appendChild(child);
// 		if (count <= 2) {
// 			parent.classList.add('red');
// 		}else if(count <= 6){
// 			parent.classList.add('orange');
// 		}else{
// 			parent.classList.add('green');
// 		}
// 	};
// 	count++;
// }

setInterval(function(){
	if (count<10) {
		parent = document.querySelector('.battery');
		child = document.createElement('div');
		child.classList.add('charge');
		parent.appendChild(child);
		if (count <= 2) {
			parent.classList.add('red');
		}else if(count <= 6){
			parent.classList.add('orange');
		}else{
			parent.classList.add('green');
		}
	};
	count++;

},1000);
