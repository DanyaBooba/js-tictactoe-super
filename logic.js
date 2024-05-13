let fieldName = "field";
let sizeOfField = 3;

function codeBlock(number, size) {
	let id = `${fieldName}-${number}`;
	// return `<div id='${id}' style='width: ${size}%'><button onClick='setItem("${id}")'></button></div>`;
	return `<div id='${id}'><button onClick='setItem("${id}")'></button></div>`;
}

function setItem(id) {
	let button = document.getElementById(id);
	if (!button) return;
	alert(button);
}

function createField(cssSizeOfBlock) {
	for (let x = 0; x < sizeOfField; x++) {
		let local_div = document.createElement("div");
		local_div.classList.add("field__item");

		for (let y = 0; y < sizeOfField; y++) {
			local_div.insertAdjacentHTML(
				"beforeend",
				codeBlock(`${x}-${y}`, cssSizeOfBlock)
			);
		}

		field.insertAdjacentHTML("beforeend", local_div.outerHTML);
	}
}

function main() {
	let field = document.getElementById(fieldName);

	if (!field) {
		console.error("Не найдено поле с таким [ID]: " + fieldName);
		return;
	}

	if (sizeOfField <= 0) {
		console.error(
			"Невозможно создать поле с таким [sizeOfField]: " + sizeOfField
		);
		return;
	}

	let cssSizeOfBlock = Math.round(100 / sizeOfField);

	createField(cssSizeOfBlock);

	const tictactoe = new TicTacToe(sizeOfField);
}

main();
