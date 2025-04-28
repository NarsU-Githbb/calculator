let showCalculating = document.getElementById('display-screen');



const buttonOne = document.getElementById('first');
buttonOne.addEventListener('click', function() { 
    showCalculating.textContent = "1";
});

const buttonTwo = document.getElementById('second');
buttonTwo.addEventListener('click', function() { 
    showCalculating.textContent = "2";
});
const buttonThree = document.getElementById('third');
buttonThree.addEventListener('click', function() { 
    showCalculating.textContent = "3";
});
const buttonFour = document.getElementById('fourth');
buttonFour.addEventListener('click', function() { 
    showCalculating.textContent = "4";
});
const buttonFive = document.getElementById('fifth');
buttonFive.addEventListener('click', function() { 
    showCalculating.textContent = "5";
});
const buttonSix = document.getElementById('sixth');
buttonSix.addEventListener('click', function() { 
    showCalculating.textContent = "6";
});
const buttonSeven = document.getElementById('seventh');
buttonSeven.addEventListener('click', function() { 
    showCalculating.textContent = "7";
});
const buttonEight = document.getElementById('eigth');
buttonEight.addEventListener('click', function() { 
    showCalculating.textContent = "8";
});
const buttonNine = document.getElementById('ninth');
buttonNine.addEventListener('click', function() { 
    showCalculating.textContent = "9";
});
const buttonNada = document.getElementById('zero');
buttonNada.addEventListener('click', function() { 
    showCalculating.textContent = "0";
});
const buttonPlus = document.getElementById('add');
buttonPlus.addEventListener('click', function() { 
    showCalculating.textContent = "+";
});
const buttonMinus = document.getElementById('reduce');
buttonMinus.addEventListener('click', function() { 
    showCalculating.textContent = "-";
});
const buttonCross = document.getElementById('multiply');
buttonCross.addEventListener('click', function() { 
    showCalculating.textContent = "x";
});
const buttonSlice = document.getElementById('divide');
buttonSlice.addEventListener('click', function() { 
    showCalculating.textContent = "÷";
});
const buttonResult = document.getElementById('equals');
buttonResult.addEventListener('click', function() { 
    showCalculating.textContent = "=";
});
const buttonRestart = document.getElementById('clear');
buttonRestart.addEventListener('click', function() { 
    showCalculating.textContent = "C";
});