const display = document.querySelector('#box');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        switch (value) {
            case 'clear':
                display.innerText = '';
                break;

            case 'backspace':
                display.innerText = display.innerText.slice(0, -1);
                break;

            case 'equal':
                calculateResult();
                break;

            default:
                display.innerText += value;
        }
    });
});
