function clearAll() {
  document.getElementById("current").value = " ";
  document.getElementById("currentTop").value = " ";
}

function insert(num) {
  // document.getElementById("current").value += num;
  var valueDigit = document.getElementById("current").value;
  valueDigit += num;
  document.getElementById("current").value = valueDigit;
}

function deleteDigit() {
  let c = document.getElementById("current").value;
  c = Math.floor(c / 10);
  document.getElementById("current").value = c;
}

let operand1;
let operand2;
let op;
var result;
// let operator;

// function sum(){
//   operand1 = document.getElementById("current").value;
//   operator = '+';
//   document.getElementById("currentTop").value = operand1 + "+";
//   document.getElementById("current").value = "";
// }

// function difference(){
//   operand1 = document.getElementById("current").value;
//   operator = "-";
//   document.getElementById("currentTop").value = operand1 + "-";
//   document.getElementById("current").value = "";
// }

// function multiply(){
//   operand1 = document.getElementById("current").value;
//   operator = "*";
//   document.getElementById("currentTop").value = operand1 + "*";
//   document.getElementById("current").value = "";
// }

// function divide(){
//   operand1 = document.getElementById("current").value;
//   operator = "/";
//   document.getElementById("currentTop").value = operand1 + "/";
//   document.getElementById("current").value = "";
// }

function operator(operator){
    operand1 = document.getElementById("current").value;
   op = operator;
    document.getElementById("currentTop").value = operand1 + op;
    document.getElementById("current").value = "";
}

function calculate() {
  // let x = document.getElementById("current").value;
  // document.getElementById("currentTop").value = x;
  // let y = eval(x);
  // document.getElementById("current").value = y;
  //debugger

var operation = new Map();
operand2 = document.getElementById("current").value;

operation.set('+', parseFloat(operand1) + parseFloat(operand2));
operation.set("-", parseFloat(operand1) - parseFloat(operand2));
operation.set("*", parseFloat(operand1) * parseFloat(operand2));
operation.set("/", parseFloat(operand1) / parseFloat(operand2));
console.log(operation.forEach(function(value, key){console.log(key)}));
document.getElementById("currentTop").value = operand1 + operation + operand2;
document.getElementById("current").value = operation.get(getByValue(operation,10));


// if (op === '+'){
//   var result = parseFloat(operand1) + parseFloat(operand2);
//   document.getElementById("currentTop").value = operand1 + "+" + operand2;
//   document.getElementById("current").value = result;
// }
// else if (op === '-'){
//   var result = parseFloat(operand1) - parseFloat(operand2);
//   document.getElementById("currentTop").value = operand1 + "-" + operand2;
//   document.getElementById("current").value = result;
// }

// else if (op === '*'){
//   var result = parseFloat(operand1) * parseFloat(operand2);
//   document.getElementById("currentTop").value = operand1 + "*" + operand2;
//   document.getElementById("current").value = result;
// }

// else if (op === '/'){
//   var result = parseFloat(operand1) / parseFloat(operand2);
//   document.getElementById("currentTop").value = operand1 + "/" + operand2;
//   document.getElementById("current").value = result;
// }

}
