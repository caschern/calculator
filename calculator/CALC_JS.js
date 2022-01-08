const calc = {
    shownValue: '0',
    firstValue: null,
    nextValue: false,
    operator: null,
  };



function enteredDigit(digit) {
  const { shownValue, nextValue } = calc;

  if (nextValue === true) {
    calc.shownValue = digit;
    calc.nextValue = false;
  } else {
    calc.shownValue = shownValue === '0' ? digit : shownValue + digit;
  }

  console.log(calc);
}

function checkOperator(nextOpr) {
  const { firstValue, shownValue, operator } = calc
  const inputValue = parseFloat(shownValue);

  if (operator && calc.nextValue)  {
    calc.operator = nextOpr;
    console.log(calc);
    return;
  }

  if (firstValue == null && !isNaN(inputValue)) {
    calc.firstValue = inputValue;
  } else if (operator) {
    const result = calculate(firstValue, inputValue, operator);

    calc.shownValue = String(result);
    calc.firstValue = result;
  }

  calc.nextValue = true;
  calc.operator = nextOpr;
  console.log(calc);
}
function calculate(firstValue, secondValue, operator) {
  if (operator === '+') {
    return firstValue + secondValue;
  } else if (operator === '-') {
    return firstValue - secondValue;
  } else if (operator === '*') {
    return firstValue * secondValue;
  } else if (operator === '/') {
    return firstValue / secondValue;
  }

  return secondValue;
}

function resetCalc() {
  calc.shownValue = '0';
  calc.firstValue = null;
  calc.nextValue = false;
  calc.operator = null;
  console.log(calc);
}

function newDisplay() {
  const display = document.querySelector('.calc-screen');
  display.value = calc.shownValue;
  }

  newDisplay();

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    checkOperator(target.value);
    newDisplay();
    return;
  }
  
  if (target.classList.contains('clear-all')) {
    resetCalc();
    newDisplay();
    return;
  }

  enteredDigit(target.value);
  newDisplay();
  });