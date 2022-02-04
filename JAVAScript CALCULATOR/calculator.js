let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == 'Ans') {
            try {
                screen.value = eval(screenValue);
            } catch (err) {
                screen.value = "error";
            }

        } else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
            screen.value = "0";
        } else if (buttonText == 'DEL') {
            screen.value = screen.value.slice(0, -1);
            screenValue = screen.value;


        } else {
            if (screen.value == "") {
                screenValue = "";
            }
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}