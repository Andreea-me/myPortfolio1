var a, b, c;
var outputText;
function validate() {
  a = document.forms["input_form"]["aterm"].value;
  b = document.forms["input_form"]["bterm"].value;
  c = document.forms["input_form"]["cterm"].value;

  outputText = [a, b, c];
  document.getElementById("output_text").innerHTML = outputText.reverse();
}

//2. Media aritmetica
function calculateMeanAverage() {
  let userInput = document.getElementById("medie").value;
  let numbers = userInput.split(" ");
  var suma = 0;
  for (var i = 0; i < numbers.length; i++) {
    suma += parseInt(numbers[i]);
  }

  var meanAverage = suma / numbers.length;
  document.getElementById("media").value = meanAverage;
}

// 3. Minimul

function calculateMinimum() {
  let userInput = document.getElementById("minim").value;
  let numbers = userInput.split(" ");
  var min = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  document.getElementById("result").value = min;
}

//4. Maximul
function calculateMaximum() {
  let userInput = document.getElementById("maxim").value;
  let numbers = userInput.split(" ");
  var max = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  document.getElementById("resultMaxim").value = max;
}
// 5. Sortare

function sortNumbers() {
  let userInput = document.getElementById("sort").value;
  let numbers = userInput.split(" ");
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let sortThis = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = sortThis;
      }
    }
  }
  document.getElementById("resultSort").value = numbers;
}

//6. Numere pare

function displayEvenNumbers() {
  let userInput = document.getElementById("even").value;
  let numbers = userInput.split(" ");
  var evens = numbers.filter((x) => x % 2 == 0);
  document.getElementById("resultEven").value = evens;
}

//7. Numere impare
function displayOddNumbers() {
  let userInput = document.getElementById("odd").value;
  let numbers = userInput.split(" ");
  var odds = numbers.filter((x) => x % 2 == 1);
  document.getElementById("resultOdd").value = odds;
}

//8. Fibonacci
function displayFibonacci(userInput) {
  var userInput = document.getElementById("fibonacciInput").value;
  var n1 = 0,
    n2 = 1,
    nextTerm = 0;
  let result = 0;
  for (var i = 1; i < userInput; i++) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    result = result + "," + nextTerm;
  }
  document.getElementById("fibonacciResult").value = result;
}

// 9. Diferenta
function displayDifference() {
  let userInput = document.getElementById("differenceInput").value;
  let numbers = userInput.split(" ");
  let maxNumber = 0;
  let minNumber = 0;
  let difference = 0;
  maxNumber = Math.max.apply(null, numbers);
  minNumber = Math.min.apply(null, numbers);
  difference = maxNumber - minNumber;
  document.getElementById("differenceResult").value = difference;
}

//10. Cifre impare
function displayOdd() {
  let userInput = document.getElementById("oddInput").value;
  let contor = 0;
  while (userInput > 0) {
    let rem = userInput % 10;
    if (rem % 2 == 1) contor++;

    userInput = Math.floor(userInput / 10);
  }
  document.getElementById("oddResult").value = contor;
}

const seasons = {
  SUMMER: "summer",
  WINTER: "winter",
  SPRING: "spring",
  AUTUMN: "autumn",
};

//11. Luna calendaristica
function displayMonth() {
  var monthsMap = getMonthsMap();
  console.log(monthsMap);
  let userInput = document.getElementById("monthNumber").value;
  document.getElementById("monthResult").value = monthsMap.get(
    parseInt(userInput)
  );
}

function getMonthsMap() {
  var monthsMap = new Map();
  monthsMap.set(1, "January");
  monthsMap.set(2, "Feb");
  monthsMap.set(3, "Mar");
  monthsMap.set(4, "Apr");
  monthsMap.set(5, "May");
  monthsMap.set(6, "Jun");
  monthsMap.set(7, "Jul");
  monthsMap.set(8, "Aug");
  monthsMap.set(9, "Sept");
  monthsMap.set(10, "Oct");
  monthsMap.set(11, "Nov");
  monthsMap.set(12, "Dec");

  return monthsMap;
}

//12. Cifre egale
function displayEqual() {
  let userInput = document.getElementById("userInput").value;
  var digit = userInput % 10;
  var itsTrue = "True";
  var itsFalse = "False";
  while (userInput) {
    var currentDigit = userInput % 10;
    userInput = parseInt(userInput / 10);
    if (currentDigit != digit) {
      document.getElementById("equalResult").value = itsFalse;
    } else {
      document.getElementById("equalResult").value = itsTrue;
    }
  }
}

//13. CNP
function displayBirthday() {
  let userInput = document.getElementById("cnp").value;
  var year = userInput.substring(1, 3);
  var month = userInput.substring(3, 5);
  var day = userInput.substring(5, 7);
  document.getElementById("year").value = year;
  document.getElementById("month").value = month;
  document.getElementById("day").value = day;
}
