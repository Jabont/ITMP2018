function addChild() {
	console.log("Add")
	child = document.createElement("div");
	parent = document.querySelector(".parent");
	parent.appendChild(child);
	child.classList.add("child");
	child.classList.add("white");
	child.classList.add("circle");
}