
window.onload = init;
function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}

function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	var li = document.createElement("li");

	li.innerHTML = songName;

	if (songName == "") {
		alert("please enter the song");
	}
	else {
		alert("Adding " + songName);
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
	}

	
}