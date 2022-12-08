/** @format */

let chosen;
let sum = 0;
let num1 = null;
let num2 = null;
let operator = undefined;
const equal = document.querySelector("#equal");

//assigning numbers and operator
document.addEventListener("click", (e) => {
  chosen = parseInt(e.target.value);
  //disable dot button
  if (e.target.id == "dot") {
    document.getElementById("dot").disabled = true;
  }
  if (isNaN(chosen) && e.target.id != "dot" && e.target.id != "backSp") {
    console.log("not a number");
    if (!operator) {
      operator = e.target.value;
    } else if (e.target.id != "equal") {
      if (operator == "*" || operator == "/") {
        num2 = 1;
      }
      operate(num1, num2, operator);
      checkNoErr();
      operator = e.target.value;
    } else if (e.target.id == "equal") {
    }

    //check if first number already assigned
  } else if (!num1) {
    num1 = e.target.value;
  } else if (num1 && !operator) {
    num1 = num1 + e.target.value;
  }
  //assigning number 2
  else if (!num2) {
    num2 = e.target.value;
  } else {
    num2 = num2 + e.target.value;
  }

  document.querySelector(".resultScreen").innerHTML += e.target.value;
});

//pressing = button
equal.addEventListener("click", () => {
  operate(num1, num2, operator);
  checkNoErr();
});

//calculate function
function operate(num1, num2, opr) {
  switch (opr) {
    case "+":
      sum = parseFloat(num1) + parseFloat(num2);
      sum = sum.toFixed(2);
      if (sum % 1 == false) {
        sum = parseInt(sum);
        return sum;
      }
      return sum;

    case "-":
      sum = parseFloat(num1) - parseFloat(num2);
      sum = sum.toFixed(2);
      if (sum % 1 == false) {
        sum = parseInt(sum);
        return sum;
      }
      return sum;

    case "/":
      sum = parseFloat(num1) / parseFloat(num2);
      sum = sum.toFixed(2);
      if (sum % 1 == false) {
        sum = parseInt(sum);
        return sum;
      }
      return sum;

    case "*":
      sum = parseFloat(num1) * parseFloat(num2);
      sum = sum.toFixed(2);
      if (sum % 1 == false) {
        sum = parseInt(sum);
        return sum;
      }
      return sum;
  }
}

//pressing AC button
document.querySelector("#clrBtn").addEventListener("click", () => {
  document.querySelector(".resultScreen").innerHTML = "";
  sum = 0;
  num1 = 0;
  num2 = 0;
});

function checkNoErr() {
  if (sum === Infinity) {
    document.querySelector(".resultScreen").innerHTML = "ERROR";
  } else {
    document.querySelector(".resultScreen").innerHTML = sum;
    num1 = sum;
    num2 = 0;
  }
  document.getElementById("dot").disabled = false;
}

//pressing CLR
document.getElementById("backSp").addEventListener("click", () => {
  if (num2) {
    num2 = num2.substr(0, num2.length - 1);
    document.querySelector(".resultScreen").innerHTML = num1 + operator + num2;
    console.log("from the num2" + num2);
  } else if (num1) {
    num1 = num1.substr(0, num1.length - 1);
    document.querySelector(".resultScreen").innerHTML = num1;
  }
});
