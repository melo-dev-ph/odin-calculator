
function clear(){
    console.log("clearing");
    calcTextContent.textContent = 0;
    firstVar = "";
    secondVar = "";
}

function add(n, x){
    return n + x;
}

function subtract(n, x){
    return n - x;
}

function divide(n, x){
    return n / x;
}

function multiply(n, x){
    return n * x;
}

function operate(ops, n, x){
    let answer = 0;
    if(ops == '+') {
        answer = add(n, x);
    } else if (ops == '-') {
        answer = subtract(n, x);
    } else if (ops == 'x') {
        answer = multiply(n, x);
    } else {
        answer = divide(n, x);
    }

    return answer;
}



function alreadyHasOperatorButton() {
    operatorButtons.forEach((button) => {
        if(calcTextContent.textContent.includes(button.textContent.trim())){
            return true;
        }
    })
    return false;
}


let operator = "";

const existingOperators = ['+', '-', '÷', 'x'];
const numButtons = document.querySelectorAll(".btn.num-btn");
const calcTextContent = document.querySelector("#text-content");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector("#clear-btn");
const operatorButtons = document.querySelectorAll(".btn.op-btn");
const eqButton = document.querySelector(".eq-btn");

let firstVar = "";
let secondVar = "";



clearButton.addEventListener("click", () => {
    clear();
})

operatorButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        let pastTextContent = calcTextContent.textContent;
        const buttonValue = e.target.textContent;
        operator = buttonValue;
        console.log("operator added");

        const hasOperator = existingOperators.some((ops) => calcTextContent.textContent.includes(ops));

        if(hasOperator){
            existingOperators.forEach((ops) => { calcTextContent.textContent = calcTextContent.textContent.replace(ops, operator); });
        } else {
            calcTextContent.textContent = pastTextContent + operator; 
        }

        console.log(calcTextContent.textContent);

        

    })
})

numButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const buttonValue = e.target.textContent.trim();

        const hasOperator = existingOperators.some((ops) => calcTextContent.textContent.includes(ops));

        if(hasOperator) {
            secondVar += buttonValue
            console.log("Added Number");
            console.log(secondVar);
        } else if (!hasOperator) {
            firstVar += buttonValue;
            console.log("Added Number");
            console.log(firstVar);
        }
        


        if(calcTextContent.textContent == 0) {
            calcTextContent.textContent = buttonValue;
        } else {
            calcTextContent.textContent += buttonValue;
        }

    })
})

eqButton.addEventListener("click", (e) => {
    let answer = 0;
    const rawArray = calcTextContent.textContent.split('');
    const currentOperator = rawArray.filter((op) => { return existingOperators.includes(op)});
    
    answer = operate(currentOperator, parseInt(firstVar), parseInt(secondVar));
    console.log(`First Var: ${firstVar} | Second Var: ${secondVar} | ${firstVar} ${currentOperator} ${secondVar}`);
    console.log(answer);

    firstVar = answer;
    secondVar = "";

    calcTextContent.textContent = firstVar;
    

})



