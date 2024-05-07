function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxEl = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createClick);
destroyButton.addEventListener('click', destroyClick);

function createClick() {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
        return
    }
    input.value = "";
    createBoxes(amount);
};
    

function createBoxes(amount) {
    const boxsize = 30;
    boxEl.innerHTML = "";
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${boxsize}px`;
        box.style.height = `${boxsize}px`;
        
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
    }
    boxEl.appendChild(fragment);
}
function destroyClick() {
  boxEl.innerHTML = "";
}
