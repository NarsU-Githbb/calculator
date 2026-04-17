const mathObj = {
        plus: function(b, c) {
            return b + c
            },
            minus: function(b, c) {
                return b - c
                },
                share: function(b, c) {
                    return b / c
                    },
                    multiply: function(b, c) {
                        return b * c
                        },
                    }
                    let showCalculating = document.getElementById('display-screen');
                   
        
                    const operators = ["+", "-", "*", "/"];

                    const operatorMap = {
                        "+": mathObj.plus,
                        "-": mathObj.minus,
                        "*": mathObj.multiply,
                        "/": mathObj.share
                    };
//input validation function
                    function appending(value) {
                        let currentDisplay = showCalculating.textContent;
                const lastChar = showCalculating.textContent.slice(-1);
                        const charBeforeLast = currentDisplay.slice(-2, -1);

                        if (value === ".") {
                            let operatorUsed = operators.find(op => currentDisplay.includes(op));
                        
                            if (!operatorUsed) {
                                if (currentDisplay.includes(".")) return;
                            } else {
                                let num2 = currentDisplay.split(operatorUsed)[1];
                                if (num2 && num2.includes(".")) return;
                            }
                        }

                        //Blocks invalid starts with operators (outside of "-" that is used for negative numbers)
                        if (currentDisplay === "" && operators.includes(value) && value !== "-") return;

                            // 1. BLOCK TRIPLE OPERATORS (e.g., + - -)
    if (operators.includes(value) && operators.includes(lastChar) && operators.includes(charBeforeLast)) {
        return; 
    }
//negative number validation:
                        if (value === "-") {
                            if (currentDisplay === "") {
                                showCalculating.textContent = "-";
                                return;
                            
                            }
                                
                                
                
                            if (operators.includes(lastChar)) {
                                if (lastChar === "-" && currentDisplay === "-") return;
                                showCalculating.textContent += value;
                                return;
                            }
                        }

                            // Replace old operator with the new ones
                        if (operators.includes(value)) {
                            if (operators.includes(lastChar)) {

                                //so that if I press "-" on a empty expression it can't be changed to other operators (thus preventing stuff like *2-2)
                                if (currentDisplay.length === 1 && currentDisplay === "-") {
                                    return;
                                }
                            
                                showCalculating.textContent = currentDisplay.slice(0, -1) + value;
                                return; // Stop here so it doesn't double-append
                            }
                        }

                        // define / find operator in the expression
    let operatorUsed = operators.find(op => currentDisplay.includes(op));
        

    if (!operatorUsed) {
        // FIRST NUMBER LOGIC 
        if (currentDisplay === "0" && value !== ".") {
            showCalculating.textContent = value;
        } else {
            showCalculating.textContent += value;
        }
    } else {
        // SECOND NUMBER LOGIC
        let [num1, num2] = currentDisplay.split(operatorUsed);

        //calculates values when you press another operator after second num
        if (operators.includes(value) && num2 !== "") {
            operate(); 
            showCalculating.textContent += value; // after calculation add new operator next to result
            return;
        }

        // blocks multiple leading zeros
        if (num2 === "0" && value === "0") {
            return; 
        }

        // Allow replacing num2 zero (like "0" to "5")
        if (num2 === "0" && value !== ".") {
            showCalculating.textContent = num1 + operatorUsed + value;
            return;
        }

        showCalculating.textContent += value;
    }
}
            

const buttonOne = document.getElementById('first');
buttonOne.addEventListener('click', function() { 
 appending("1")
});

const buttonTwo = document.getElementById('second');
buttonTwo.addEventListener('click', function() { 
    appending("2")
});
const buttonThree = document.getElementById('third');
buttonThree.addEventListener('click', function() { 
    appending("3")
});
const buttonFour = document.getElementById('fourth');
buttonFour.addEventListener('click', function() { 
    appending("4")
});
const buttonFive = document.getElementById('fifth');
buttonFive.addEventListener('click', function() { 
    appending("5")
});
const buttonSix = document.getElementById('sixth');
buttonSix.addEventListener('click', function() { 
    appending("6")
});
const buttonSeven = document.getElementById('seventh');
buttonSeven.addEventListener('click', function() { 
    appending("7")
});
const buttonEight = document.getElementById('eigth');
buttonEight.addEventListener('click', function() { 
    appending("8")
});
const buttonNine = document.getElementById('ninth');
buttonNine.addEventListener('click', function() { 
    appending("9")
});
const buttonFractions = document.getElementById('decimal');
buttonFractions.addEventListener('click', function() { 
let currentDisplay = showCalculating.textContent
if (currentDisplay === '') {
    return appending("0.")
} else {
  return appending(".")
}
});
const buttonNada = document.getElementById('zero');
buttonNada.addEventListener('click', function() { 
    appending("0")

});
const buttonPlus = document.getElementById('add');
buttonPlus.addEventListener('click', function() { 
    appending("+");
});
const buttonMinus = document.getElementById('reduce');
buttonMinus.addEventListener('click', function() { 
        appending("-");
    
});
const buttonCross = document.getElementById('multiply');
buttonCross.addEventListener('click', function() { 
    appending("*");
});
const buttonSlice = document.getElementById('divide');
buttonSlice.addEventListener('click', function() { 
    appending("/");
});
const buttonDelete = document.getElementById('backspace');
buttonDelete.addEventListener('click', function() { 
    showCalculating.textContent = showCalculating.textContent.slice(0,-1);
});
const buttonResult = document.getElementById('equals');
buttonResult.addEventListener('click', function() { 
    operate();
});
const buttonRestart = document.getElementById('clear');
buttonRestart.addEventListener('click', function() { 
    showCalculating.textContent = '';
});

//the actual math function
function operate() {
    let expression = showCalculating.textContent;
    let operatorUsed = null;
    let operatorIndex = -1;

    //i = 1 coz index 0 might be "-"
    for (let i = 1; i < expression.length; i++) {
        if (operators.includes(expression[i])) {
            // If we found a minus, check if it's a negative number (is it preceded by a another operator)
            if (expression[i] === "-" && operators.includes(expression[i-1])) {
                continue; 
            }
            operatorUsed = expression[i];
            operatorIndex = i;
            break;
        }
    }
    if (!operatorUsed || operatorIndex === -1) return;

    let num1 = parseFloat(expression.slice(0, operatorIndex));
    let num2 = parseFloat(expression.slice(operatorIndex + 1));

    let operation = operatorMap[operatorUsed];
    let result;

    //this error check doesn't work :( 
    if (operatorUsed === "/" && num2 === 0) {
        result = "Error";
    } else {
        result = operation(num1, num2);
    }

    //in error cases the display will turn into just 0
    if (isNaN(result)) {
        showCalculating.textContent = 0;
        return;
    }
    //mathround prevents javascript weirdness like 0.1 + 0.2 = 0.30000000000000004
    showCalculating.textContent = Math.round(result * 1000000) / 1000000;
}