window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}
function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	///alert("Adding "+ songName);
	var li = document.createElement("li");
		li.setAttribute("id", "songName");
		li.innerHTML = songName;

		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		
		///var html = '<input type="file" name="uploaded_files[]" /> ' +
               ///'<a href="" onclick="javascript:removeElement('file-' + fileId + ''); return false;">Remove</a>';
}
///function removeElement {
	///var element = document.getElementById("deleteButton");
	///button.onclick = handleButtonClick;
	///element.parentNode.removeChild(element);
///}

function deleteElement() {
    var list = document.getElementById("songName");
    list.removeChild(list.childNodes[0]);
}