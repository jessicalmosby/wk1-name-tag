const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});

const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

const colorSelector = document.getElementById('color-selector');
colorSelector.addEventListener('change', () => {
    console.log('I am changing the color');
    nameDisplay.classList.remove('pink');
    nameDisplay.classList.remove('lavender');
    nameDisplay.classList.remove('purple');
    nameDisplay.classList.add(colorSelector.value);
});
