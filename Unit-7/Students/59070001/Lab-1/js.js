function addChild(){
	parent = document.querySelector('.parent');
	child = document.createElement('div');
	child.classList.add('child');
	var x = Math.floor(Math.random() * 2);
    	console.log(x);
    	if (x == 0) {
			child.setAttribute("class", "child2") }
		
	parent.appendChild(child);

}