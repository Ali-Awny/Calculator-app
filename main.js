const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".keys button");
const clear = document.querySelector('[data-action="clear"]');
let firstNum;
let secondNum;
let operator;
let result;


clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = 0;
    secondNum = 0;
    operator = "";
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;


        if (button.classList.contains("number")) {
            display.textContent += action;
        }else if (["+", "-", "*", "/"].includes(action)) {
            firstNum = Number(display.textContent);
            operator = action;
            display.textContent = "";
        } else if(action === "Ans"){
            display.textContent = result;
        } else if (action === "=") {
            secondNum = Number(display.textContent);
            if (operator === "+") {
                result = firstNum + secondNum;
                display.textContent = result;
            }else if (operator === "-"){
                result = firstNum - secondNum;
                display.textContent = result;
            }else if (operator === "*"){
                result = firstNum * secondNum;
                display.textContent = result;
            }else if (operator === "/"){
                result = firstNum / secondNum;
                display.textContent = result;
            }
        }
        
    });
});