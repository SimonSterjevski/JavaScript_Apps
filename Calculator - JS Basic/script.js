

let buttons = {
    result: document.querySelector(".result"),
    zero: document.querySelector(".btn_0"),
    one: document.querySelector(".btn_1"),
    two: document.querySelector(".btn_2"),
    three: document.querySelector(".btn_3"),
    four: document.querySelector(".btn_4"),
    five: document.querySelector(".btn_5"),
    six: document.querySelector(".btn_6"),
    seven: document.querySelector(".btn_7"),
    eight: document.querySelector(".btn_8"),
    nine: document.querySelector(".btn_9"),
    plus: document.querySelector(".btn_plus"),
    minus: document.querySelector(".btn_minus"),
    multiply: document.querySelector(".btn_multiply"),
    divide: document.querySelector(".btn_divide"),
    equal: document.querySelector(".btn_equal"),
    clear: document.querySelector(".btn_clear"),
    point: document.querySelector(".btn_point")
}

buttons.result.value = 0;
buttons.result.innerText = "";
let numbers = [];
let operators = [];
let result = 0;
let point = true;
let addNum = true;
let operator = true;
let equal = true;

buttons.zero.addEventListener("click", onClick0);
buttons.one.addEventListener("click", onClick1);
buttons.two.addEventListener("click", onClick2);
buttons.three.addEventListener("click", onClick3);
buttons.four.addEventListener("click", onClick4);
buttons.five.addEventListener("click", onClick5);
buttons.six.addEventListener("click", onClick6);
buttons.seven.addEventListener("click", onClick7);
buttons.eight.addEventListener("click", onClick8);
buttons.nine.addEventListener("click", onClick9);
buttons.plus.addEventListener("click", onClickPlus);
buttons.minus.addEventListener("click", onClickMinus);
buttons.multiply.addEventListener("click", onClickMultiply);
buttons.divide.addEventListener("click", onClickDivide);
buttons.equal.addEventListener("click", onClickEquals);
buttons.clear.addEventListener("click", onClickClear);
buttons.point.addEventListener("click", onClickPoint);


function onClick0() {
    if (operators[operators.length-1] === "/") {
        buttons.result.innerText = "Error";
        operator = false;
        addNum = false;
        point = true;
        result = 0;
        buttons.result.value = 0;
        numbers = [];
        operators = [];
    } else {
    if (addNum === false) {
        setAndAddNumberValue(buttons.zero.value, buttons.zero.innerText);
    } else {
        addNumberValue(buttons.zero.value, buttons.zero.innerText);
    }
    operator = true;
    equal = true;
    }
}


function onClick1() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.one.value, buttons.one.innerText);
    } else {
        addNumberValue(buttons.one.value, buttons.one.innerText);
    }
    operator = true;
    equal = true;
}

function onClick2() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.two.value, buttons.two.innerText);
    } else {
        addNumberValue(buttons.two.value, buttons.two.innerText);
    }
    operator = true;
    equal = true;
}

function onClick3() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.three.value, buttons.three.innerText);
    } else {
        addNumberValue(buttons.three.value, buttons.three.innerText);
}
    operator = true;
    equal = true;
    }

function onClick4() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.four.value, buttons.four.innerText);
    } else {
        addNumberValue(buttons.four.value, buttons.four.innerText);
    }
    operator = true;
    equal = true;
}

function onClick5() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.five.value, buttons.five.innerText);
    } else {
        addNumberValue(buttons.five.value, buttons.five.innerText);
    }
    operator = true;
    equal = true;
}

function onClick6() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.six.value, buttons.six.innerText);
    } else {
        addNumberValue(buttons.six.value, buttons.six.innerText);
    }
    operator = true;
    equal = true;
}

function onClick7() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.seven.value, buttons.seven.innerText);
    } else {
        addNumberValue(buttons.seven.value, buttons.seven.innerText);
    }
    operator = true;
    equal = true;
}

function onClick8() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.eight.value, buttons.eight.innerText);
    } else {
        addNumberValue(buttons.eight.value, buttons.eight.innerText);
    }
    operator = true;
    equal = true;
}

function onClick9() {
    if (addNum === false) {
        setAndAddNumberValue(buttons.nine.value, buttons.nine.innerText);
    } else {
        addNumberValue(buttons.nine.value, buttons.nine.innerText);
    }
    operator = true;
    equal = true;
}

function onClickPoint () {
    if (point === true && buttons.result.innerText !== "Error") {
        if (numbers.length > 0) {
        addNumberValue(buttons.point.value, buttons.point.innerText);
    } else {
    addNumberValue(buttons.point.value, buttons.point.innerText);
    addNum = true;
}
equal = false;
operator = false;
    }
    point = false
}


function onClickPlus() {
    if (operator === true) {
    if (numbers.length < 1) {
        addFirstNumAndOperator (buttons.plus.value, buttons.plus.innerText);
    } else {
        addNumAndOperator (buttons.plus.value);
    if (operators[operators.length-2] === "+") {
        updateResultPlusSimple(buttons.plus.innerText);
    } else if (operators[operators.length-2] === "-") {
        updateResultMinusSimple(buttons.plus.innerText);
    }    
    else if (operators[operators.length-2] === "*") {
        if (operators[operators.length-3] === "+") {
    result = numbers[numbers.length-3] + (numbers[numbers.length-2] * numbers[numbers.length-1]);
    numbers.push(result);
    buttons.result.innerText += buttons.plus.innerText;
    buttons.result.value = 0;
        } else if (operators[operators.length-3] === "-") {
        result = numbers[numbers.length-3] - (numbers[numbers.length-2] * numbers[numbers.length-1]);
        numbers.push(result);
        buttons.result.innerText += buttons.plus.innerText;
        buttons.result.value = 0;
        } else {
            updateResultMultiplySimple(buttons.plus.innerText);
        }
    }
        else if (operators[operators.length-3] === "*") {
            updateResultMultiplySimple(buttons.plus.innerText);
        }
     else if (operators[operators.length-2] === "/") {
        if (operators[operators.length-3] === "+") {
    result = numbers[numbers.length-3] + (numbers[numbers.length-2] / numbers[numbers.length-1]);
    numbers.push(result);
    buttons.result.innerText += buttons.plus.innerText;
    buttons.result.value = 0;
        } else if (operators[operators.length-3] === "-") {
        result = numbers[numbers.length-3] - (numbers[numbers.length-2] / numbers[numbers.length-1]);
        numbers.push(result);
        buttons.result.innerText += buttons.plus.innerText;
        buttons.result.value = 0;
        } else {
            updateResultDivideSimple(buttons.plus.innerText);
        }
    } else if (operators[operators.length-3] === "/") {
        updateResultDivideSimple(buttons.plus.innerText);
        }
    }
    point = true;
    addNum = true;
    operator = false;
    equal = false;
}
}

function onClickMinus() {
    if (operator === true) {
    if (numbers.length < 1) {
        addFirstNumAndOperator (buttons.minus.value, buttons.minus.innerText);
    } else {
        addNumAndOperator (buttons.minus.value);
    if (operators[operators.length-2] === "-") {
        updateResultMinusSimple(buttons.minus.innerText);
    } else if (operators[operators.length-2] === "+") {
        updateResultPlusSimple(buttons.minus.innerText);
        }  
    else if (operators[operators.length-2] === "*") {
        if (operators[operators.length-3] === "-") {
    result = numbers[numbers.length-3] - (numbers[numbers.length-2] * numbers[numbers.length-1]);
    numbers.push(result);
    buttons.result.innerText += buttons.minus.innerText;
    buttons.result.value = 0;
        } else if (operators[operators.length-3] === "+") {
        result = numbers[numbers.length-3] + (numbers[numbers.length-2] * numbers[numbers.length-1]);
        numbers.push(result);
        buttons.result.innerText += buttons.minus.innerText;
        buttons.result.value = 0;   
        } else {
            updateResultMultiplySimple(buttons.minus.innerText);
        }
    }
        else if (operators[operators.length-3] === "*") {
            updateResultMultiplySimple(buttonsminus.inn.erText);
        }
     else if (operators[operators.length-2] === "/") {
        if (operators[operators.length-3] === "-") {
    result = numbers[numbers.length-3] - (numbers[numbers.length-2] / numbers[numbers.length-1]);
    numbers.push(result);
    buttons.result.innerText += buttons.minus.innerText;
    buttons.result.value = 0;
        } else if (operators[operators.length-3] === "+") {
        result = numbers[numbers.length-3] + (numbers[numbers.length-2] / numbers[numbers.length-1]);
        numbers.push(result);
        buttons.result.innerText += buttons.minus.innerText;
        buttons.result.value = 0;   
        } else {
            updateResultDivideSimple(buttons.minus.innerText);
        }
    }
        else if (operators[operators.length-3] === "/") {
            updateResultDivideSimple(buttons.minus.innerText);
        }
    } 
    point = true;
    addNum = true;
    operator = false;
    equal = false;
}
}

function onClickMultiply() {
    if (operator === true) {
    if (numbers.length < 1) {
        addFirstNumAndOperator (buttons.multiply.value, buttons.multiply.innerText);
    } else {
        addNumAndOperator (buttons.multiply.value);
    if (operators[operators.length-2] === "+" || operators[operators.length-2] === "-") {
        buttons.result.innerText += buttons.multiply.innerText;
        buttons.result.value = 0;
    } else if (operators[operators.length-2] === "*") {
        if (operators[operators.length-3] === "+" || operators[operators.length-3] === "-") {
        result = numbers[numbers.length-3];
        let result1 = numbers[numbers.length-2] * numbers[numbers.length-1];  
        numbers.push(result);
        numbers.push(result1);
        if ((operators[operators.length-2] === "*" && operators[operators.length-1] === "*") ||
        (operators[operators.length-2] === "/" && operators[operators.length-1] === "/")) {
        operators.pop();
        } else {
            let change = operators[operators.length-1];
            operators[operators.length-1] = operators[operators.length-2];
            operators[operators.length-2] = change;
            operators.pop();
        }
        buttons.result.innerText += buttons.multiply.innerText;
        buttons.result.value = 0;
        } else {
            updateResultMultiplySimple(buttons.multiply.innerText);
            }
        } else if (operators[operators.length-2] === "/") {
            if (operators[operators.length-3] === "+" || operators[operators.length-3] === "-") {
            result = numbers[numbers.length-3];
            let result1 = numbers[numbers.length-2] / numbers[numbers.length-1];  
            numbers.push(result);
            numbers.push(result1);
            if ((operators[operators.length-2] === "*" && operators[operators.length-1] === "*") ||
        (operators[operators.length-2] === "/" && operators[operators.length-1] === "/")) {
        operators.pop();
        } else {
            let change = operators[operators.length-1];
            operators[operators.length-1] = operators[operators.length-2];
            operators[operators.length-2] = change;
            operators.pop();
        }
            buttons.result.innerText += buttons.multiply.innerText;
            buttons.result.value = 0;
            } else {
                updateResultDivideSimple(buttons.multiply.innerText);
                }
            } else if (operators[operators.length-2] === "+") {
                updateResultPlusSimple(buttons.multiply.innerText);
            } else if (operators[operators.length-2] === "-") {
                updateResultMinusSimple(buttons.multiply.innerText);
            }
        else if (operators[operators.length-3] === "*") {
        result = numbers[numbers.length-3]; 
        numbers.push(result);
        buttons.result.innerText += buttons.multiply.innerText;
        buttons.result.value = 0;
        } else if (operators[operators.length-3] === "/") {
            result = numbers[numbers.length-3]; 
            numbers.push(result);
            buttons.result.innerText += buttons.multiply.innerText;
            buttons.result.value = 0;
            }
    }
    point = true;
    addNum = true;
    operator = false;
    equal = false;
}
}

function onClickDivide() {
    if (operator === true) {
    if (numbers.length < 1) {
        addFirstNumAndOperator (buttons.divide.value, buttons.divide.innerText);
    } else {
        addNumAndOperator (buttons.divide.value);
    if (operators[operators.length-2] === "+" || operators[operators.length-2] === "-") {
        buttons.result.innerText += buttons.divide.innerText;
        buttons.result.value = 0;
    } else if (operators[operators.length-2] === "/") {
        if (operators[operators.length-3] === "+" || operators[operators.length-3] === "-") {
        result = numbers[numbers.length-3];
        let result1 = numbers[numbers.length-2] / numbers[numbers.length-1];  
        numbers.push(result);
        numbers.push(result1);
        if ((operators[operators.length-2] === "*" && operators[operators.length-1] === "*") ||
        (operators[operators.length-2] === "/" && operators[operators.length-1] === "/")) {
        operators.pop();
        } else {
            let change = operators[operators.length-1];
            operators[operators.length-1] = operators[operators.length-2];
            operators[operators.length-2] = change;
            operators.pop();
        }
        buttons.result.innerText += buttons.divide.innerText;
        buttons.result.value = 0;
        } else {
            updateResultDivideSimple(buttons.divide.innerText);
        }
    } else if (operators[operators.length-2] === "*") {
        if (operators[operators.length-3] === "+" || operators[operators.length-3] === "-") {
        result = numbers[numbers.length-3];
        let result1 = numbers[numbers.length-2] * numbers[numbers.length-1];  
        numbers.push(result);
        numbers.push(result1);
        if ((operators[operators.length-2] === "*" && operators[operators.length-1] === "*") ||
        (operators[operators.length-2] === "/" && operators[operators.length-1] === "/")) {
        operators.pop();
        } else {
            let change = operators[operators.length-1];
            operators[operators.length-1] = operators[operators.length-2];
            operators[operators.length-2] = change;
            operators.pop();
        }
        buttons.result.innerText += buttons.divide.innerText;
        buttons.result.value = 0;
        } else {
            updateResultMultiplySimple(buttons.divide.innerText);
        }
    } else if (operators[operators.length-2] === "+") {
        updateResultPlusSimple(buttons.divide.innerText);
    } else if (operators[operators.length-2] === "-") {
        updateResultMinusSimple(buttons.divide.innerText);
    }
        else if (operators[operators.length-3] === "/") {
        result = numbers[numbers.length-3]; 
        numbers.push(result);
        buttons.result.innerText += buttons.divide.innerText;
        buttons.result.value = 0;
        } else if (operators[operators.length-3] === "*") {
            result = numbers[numbers.length-3]; 
            numbers.push(result);
            buttons.result.innerText += buttons.divide.innerText;
            buttons.result.value = 0;
            }
    } 
    point = true;
    addNum = true;
    operator = false;
    equal = false;
}
}

function onClickEquals() {
    if (equal === true) {
    let lastNumber = parseFloat(buttons.result.value);
    if (operators[operators.length-1] === "+") {
        result += lastNumber;
        buttons.result.innerText = result;
    } else if (operators[operators.length-1] === "-") {
        result -= lastNumber;
        buttons.result.innerText = result;
    } else if (operators[operators.length-1] === "*") {
        if (operators[operators.length-2] === "+") {
            result = numbers[numbers.length-2] + (numbers[numbers.length-1] * lastNumber);
            buttons.result.innerText = result;
        } else if (operators[operators.length-2] === "-") {
            result = numbers[numbers.length-2] - (numbers[numbers.length-1] * lastNumber);
            buttons.result.innerText = result;
        } else {
            result *= lastNumber;
            buttons.result.innerText = result; 
        }
    } else if (operators[operators.length-1] === "/") {
        if (operators[operators.length-2] === "+") {
            result = numbers[numbers.length-2] + (numbers[numbers.length-1] / lastNumber);
            buttons.result.innerText = result;
        } else if (operators[operators.length-2] === "-") {
            result = numbers[numbers.length-2] - (numbers[numbers.length-1] / lastNumber);
            buttons.result.innerText = result;
        } else {
        result /= lastNumber;
        buttons.result.innerText = result;
        }
    } 
    buttons.result.value = result;
    numbers = [];
    operators.push(buttons.equal.value);
    point = false;
    addNum = false;
}
}

function setAndAddNumberValue (value, innerText) {
    buttons.result.value = 0;
    buttons.result.innerText = "";
    buttons.result.value += value;
    buttons.result.innerText += innerText;
    if (operators[operators.length-1] === "=") {
        point = true;
    }
    addNum = true;
}

function addNumberValue (value, innerText) {
    buttons.result.value += value;
    buttons.result.innerText += innerText;
}

function addFirstNumAndOperator (value, innerText) {
    result = parseFloat(buttons.result.value);
    numbers.push(result);
    operators.push(value);
    buttons.result.innerText += innerText;
    buttons.result.value = 0;
}

function addNumAndOperator (value) {
    numbers.push(parseFloat(buttons.result.value));
    operators.push(value);
}

function updateResultPlusSimple (innerText) {
    result = numbers[numbers.length-2] + numbers[numbers.length-1];
    numbers.push(result);
    buttons.result.innerText += innerText;
    buttons.result.value = 0;
}

function updateResultMinusSimple (innerText) {
    result = numbers[numbers.length-2] - numbers[numbers.length-1];
    numbers.push(result);
    buttons.result.innerText += innerText;
    buttons.result.value = 0;
}

function updateResultMultiplySimple (innerText) {
    result = numbers[numbers.length-2] * numbers[numbers.length-1];
    numbers.push(result);
    buttons.result.innerText += innerText;
    buttons.result.value = 0;
}

function updateResultDivideSimple (innerText) {
    result = numbers[numbers.length-2] / numbers[numbers.length-1];
    numbers.push(result);
    buttons.result.innerText += innerText;
    buttons.result.value = 0;
}

function onClickClear() {
    buttons.result.value = 0;
    buttons.result.innerText = "";
    numbers = [];
    operators = [];
    result = 0;
    point = true;
    addNum = true;
    operator = true;
    equal = true;
}

