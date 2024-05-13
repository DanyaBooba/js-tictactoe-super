let fieldName = "field";
let sizeOfField = 3;

function codeBlock(id) {
	return `<div id='${fieldName}-${id}'></div>`;
}

function setItem(id) {
	alert("item");
}

function main() {
	let field = document.getElementById(fieldName);

	if (!field) {
		console.error("Не найдено поле с таким [ID]: " + fieldName);
		return;
	}

	for (let x = 0; x < sizeOfField; x++) {
		for (let y = 0; y < sizeOfField; y++) {
			field.insertAdjacentHTML("beforeend", codeBlock(`${x}-${y}`));
		}
	}
}

main();
