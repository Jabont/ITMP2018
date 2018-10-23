number = 0;
username = ['bank','Han','Ie'];
size = [20, 30, 40];
color = ["red", "blue", "yellow"];
setInterval(function () {
	number++;
	welcome.innerText = username[number%3];
	welcome.style.fontSize = size[number%3]+"px";
	welcome.style.backgroundColor = color[number%3];
} , 1000);
