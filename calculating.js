let showCalculating = document.getElementById('display-screen');

let total = "+";
let lessen = "-";
let grow = "*";
let fractionate = "/";
let operators = [total, lessen, grow, fractionate];

const buttonOne = document.getElementById('first');
buttonOne.addEventListener('click', function() { 
    showCalculating.textContent += 1;
});

const buttonTwo = document.getElementById('second');
buttonTwo.addEventListener('click', function() { 
    showCalculating.textContent += 2;
});
const buttonThree = document.getElementById('third');
buttonThree.addEventListener('click', function() { 
    showCalculating.textContent += 3;
});
const buttonFour = document.getElementById('fourth');
buttonFour.addEventListener('click', function() { 
    showCalculating.textContent += 4;
});
const buttonFive = document.getElementById('fifth');
buttonFive.addEventListener('click', function() { 
    showCalculating.textContent += 5;
});
const buttonSix = document.getElementById('sixth');
buttonSix.addEventListener('click', function() { 
    showCalculating.textContent += 6;
});
const buttonSeven = document.getElementById('seventh');
buttonSeven.addEventListener('click', function() { 
    showCalculating.textContent += 7;
});
const buttonEight = document.getElementById('eigth');
buttonEight.addEventListener('click', function() { 
    showCalculating.textContent += 8;
});
const buttonNine = document.getElementById('ninth');
buttonNine.addEventListener('click', function() { 
    showCalculating.textContent += 9;
});
const buttonNada = document.getElementById('zero');
buttonNada.addEventListener('click', function() { 
    showCalculating.textContent += 0;
});
const buttonPlus = document.getElementById('add');
buttonPlus.addEventListener('click', function() { 
    showCalculating.textContent += total;
});
const buttonMinus = document.getElementById('reduce');
buttonMinus.addEventListener('click', function() { 
    showCalculating.textContent += lessen;
});
const buttonCross = document.getElementById('multiply');
buttonCross.addEventListener('click', function() { 
    showCalculating.textContent += grow;
});
const buttonSlice = document.getElementById('divide');
buttonSlice.addEventListener('click', function() { 
    showCalculating.textContent += fractionate;
});
const buttonResult = document.getElementById('equals');
buttonResult.addEventListener('click', function() { 
    operate();
});
const buttonRestart = document.getElementById('clear');
buttonRestart.addEventListener('click', function() { 
    showCalculating.textContent = "";
});

//logic for all the math that should happen when you press equals button
function operate() {
    let expression = showCalculating.textContent;
    let operatorUsed;
    
    for (let op of operators) {
        if (expression.includes(op)) {
            operatorUsed = op;
            break;
        }
    }

    if (!operatorUsed) return;

    let [num1, num2] = expression.split(operatorUsed);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result;

    switch(operatorUsed) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            result = 'Invalid Operation';
    }

    showCalculating.textContent = result;
}



//function operate() { 

//if (operators == fractionate) {
  //  display.value = nums1/nums2;
//}

//else if(operators == grow) { 
    //display.value = nums1*nums2;

//}

//else if(operators == lessen) { 
    //display.value = nums1-nums2;

//}
//else if(operators == total) { 
    //display.value = nums1+nums2;

//}
