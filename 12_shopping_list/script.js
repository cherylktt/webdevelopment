var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var delButton = document.getElementsByClassName("delButton");

// Add a list element
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.appendChild(li);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	button.classList.add("delButton");
	button.innerHTML = "delete";
	input.value = "";
	editList();

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function editList() {

	//Toggle the .done class on and off when the list item is clicked
	for (var i=0; i < list.length; i++) {
		list[i].addEventListener("click", toggleDone);
	}

	function toggleDone() {
		this.classList.toggle("done");
	}

	//Delete list item when delete button is clicked
	for (var i=0; i < delButton.length; i++) {
		delButton[i].addEventListener("click", deleteItem);
	}

	function deleteItem() {
		this.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
editList();