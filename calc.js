function calc() {
  var a = parseInt(document.querySelector("#val1").value);
  var b = parseInt(document.querySelector("#val2").value);
  var op = document.querySelector("#operator").value;
  var calculate;
  var r = "#result"

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "exp") {
    calculate = Math.pow(a, b);
  } else if (op == "sin") {
    calculate = Math.sin(a)
  } else if (op == "cos") {
    calculate = Math.cos(a)
  } else if (op == "tan") {
    calculate = Math.tan(a)
  }
  console.log(calculate);
  document.querySelector(r).innerHTML = calculate;
}
