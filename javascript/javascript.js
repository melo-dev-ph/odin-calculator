function operate(num1, num2, operator){
}

function clear(){
    calcTextContent.textContent = 0;
}

function alreadyHasOperatorButton() {
    operatorButtons.forEach((button) => {
        if(calcTextContent.textContent.includes(button.textContent.trim())){
            return true;
        }
    })
    return false;
}

function inputNumber(num){
    if(calcTextContent.textContent == 0){
        calcTextContent.textContent = num.target.textContent.trim();
        return;
    }
    if(alreadyHasOperatorButton){
        calcTextContent.textContent = 0;
    }   

    calcTextContent.textContent += num.target.textContent.trim();
    return;
}













calcTextContent = document.querySelector("#text-content");
buttons = document.querySelectorAll(".btn");
clearButton = document.querySelector("#clear-btn");
operatorButtons = document.querySelectorAll(".btn.op-btn");

buttons.forEach((button) => {
    button.addEventListener("click", inputNumber);
})

clearButton.addEventListener("click", () => {
    clear();
})


