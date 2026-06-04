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
                result = Number((firstNum / secondNum).toFixed(3)); // Edited in 4 / 6 /2026
                display.textContent = result;
            }
        }
        
    });
});

let isDown = false;
let startX;
let scrollLeft;

display.addEventListener("mousedown", (e) => {
    isDown = true;
    display.classList.add("active");
    startX = e.pageX - display.offsetLeft;
    scrollLeft = display.scrollLeft;
});

display.addEventListener("mouseleave", () => {
    isDown = false;
});

display.addEventListener("mouseup", () => {
    isDown = false;
});

display.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - display.offsetLeft;
    const walk = (x - startX) * 2;
    display.scrollLeft = scrollLeft - walk;
});

display.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = display.scrollLeft;
});

display.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    display.scrollLeft = scrollLeft - walk;
});
