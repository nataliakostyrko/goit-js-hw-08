
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const nameValue = nameInput.value.trim();
    nameOutput.textContent = nameValue || 'Anonymus';
});



