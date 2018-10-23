function addChild(){
	parent = document.querySelector('.parent');
	child = document.createElement('div');
	child.classList.add('child');
	parent.appendChild(child);
	round = document.createElement('round');
	round.classList.add('round');
	parent.appendChild(round);
}