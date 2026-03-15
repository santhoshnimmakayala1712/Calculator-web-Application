let display = document.getElementById("display");


function appendTodisplay(value) {
    display.value += value;
}


function allclear() {
    display.value = "";
}


function calculate() {
    try {
       
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
