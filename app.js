const checkButton = document.querySelector(".check");
console.log(checkButton);
checkButton.addEventListener("click", converttoRomen);

function converttoRomen() {
  let input = document.getElementById("firstvalue");
  let num = parseInt(input.value);
  // console.log(num);
  document.getElementById("romen").innerHTML = `Entered Number:${num}`;
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  var romanized = "";
  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  document.getElementById(
    "demo"
  ).innerHTML = `Your Roman Number:</br>${romanized}`;
  input.value = "";
  input.focus();
}
